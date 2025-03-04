import React, { useState, useEffect } from "react";
import { getCityCoords, getForecast } from "./pocasi";

export type Props = {
  location: string;
  onTemperatureChange?: (temp: string) => void;
};

export const Pocasi: React.FC<Props> = ({ location, onTemperatureChange }) => {
  const [teplota, setTeplota] = useState<string>();
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

// const showError = (inputId, message) => {
//     const newSpan = document.createElement("span");
//     newSpan.innerText = message;
//     document.getElementById(inputId).parentElement.appendChild(newSpan);
// };
// const print = (message) => {
//   document.getElementById("text").value += `${typeof message === "string" ? message : JSON.stringify(message, null, 2)}`;
// };
