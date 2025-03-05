export const getCityCoords = async (cityName: string) => {
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
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export const getForecast = async ({ latitude, longitude }: Coordinates): Promise<string> => {
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
