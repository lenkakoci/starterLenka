import React, { useState, useEffect } from "react";

export type Props = {
  location: string;
  onTemperatureChange?: (temp: string) => void;
};

export const Pocasi: React.FC<Props> = ({ location, onTemperatureChange }) => {
  const [teplota, setTeplota] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // místo celého následujícího useEffectu lze použít hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coordinates = await getCityCoords(location);
        const temp = await getForecast({
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        });
        setTeplota(temp); // tady i když je fetchData asynchronní, v useEffectu ji neawaituju!!!
        if (onTemperatureChange) {
          onTemperatureChange(temp);
        }
      } catch (error) {
        console.error("Chyba při načítání počasí:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location]);

  if (loading) return <p>Načítám...</p>;

  return (
    <div className="teplota">
      <h3 style={{ fontSize: "15px", color: "gray" }}>{teplota ?? "N/A"}</h3>
    </div>
  );
};

const getCityCoords = async (cityName: string) => {
  if (cityName) {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`);
      if (!response.ok) {
        throw new Error(`Could not find location: status code ${response.status}`);
      }
      const jsonResponse = await response.json(); // rest api vraci text, tj. json, tato metoda udělá javascriptový objekt
      // print(jsonResponse);
      if (jsonResponse) {
        const x = jsonResponse.results?.[0];
        return { latitude: x.latitude, longitude: x.longitude };
        // print(`${latitude}, ${longitude}`);
      } else {
        // print("data nejsou k dispozici");
        return undefined;
      }
    } catch (e) {
      // return ("Blbé v getCityCoords: " + e.message);
      // print ("Blbé v getCityCoords: " + e.message); // metoda dfinovaná výše, vypíše v textarea
      return e;
    }
  }
};
interface Coordinates {
  latitude: number;
  longitude: number;
}

const getForecast = async ({ latitude, longitude }: Coordinates): Promise<string> => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`);
    if (!response.ok) {
      throw new Error(`Could not find forecast: status code ${response.status}`);
    }
    const jsonResponse = await response.json();

    const max = jsonResponse.daily.temperature_2m_max[0];
    const min = jsonResponse.daily.temperature_2m_min[0];
    const average = (max + min) / 2;
    return `${average.toFixed(1)} ${jsonResponse.daily_units.temperature_2m_max}`;
  } catch (e) {
    return `Chyba v getForecast: ${(e as Error).message}`;
  }
};
// const showError = (inputId, message) => {
//     const newSpan = document.createElement("span");
//     newSpan.innerText = message;
//     document.getElementById(inputId).parentElement.appendChild(newSpan);
// };
// const print = (message) => {
//   document.getElementById("text").value += `${typeof message === "string" ? message : JSON.stringify(message, null, 2)}`;
// };
