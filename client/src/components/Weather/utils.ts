type Coordinates = { latitude: number; longitude: number };

export const getCityCoords = async (cityName?: string): Promise<Coordinates> => {
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&language=en&format=json`);

  if (!response.ok) {
    throw new Error(`Could not find location: status code`);
  }
  const jsonResponse = await response.json();

  if (!jsonResponse.results) {
    throw new Error(`Could not find location: status code`);
  }

  const { latitude, longitude } = jsonResponse.results[0];
  return { latitude, longitude };
};

export const getForecast = async ({ latitude, longitude }: Coordinates): Promise<string> => {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`);
  if (!response.ok) {
    throw new Error("Could not find forecast");
  }
  const jsonResponse = await response.json();

  const max = jsonResponse.daily.temperature_2m_max[0];
  const min = jsonResponse.daily.temperature_2m_min[0];
  const average = (max + min) / 2;
  return `${average.toFixed(1)} ${jsonResponse.daily_units.temperature_2m_max}`;
};

export const getWeather = async (cityName: string): Promise<string> => {
  const coords = await getCityCoords(cityName);
  return getForecast(coords);
};
