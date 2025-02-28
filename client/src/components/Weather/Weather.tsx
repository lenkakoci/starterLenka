import { useFetchWeather } from "./useFetchWeather";
import React, { useEffect } from "react";

export type Props = {
  location: string;
  onTemperatureChange?: (temp: string) => void;
};
export const Weather: React.FC<Props> = ({ location, onTemperatureChange }) => {
  const { error, fetchWeather, isLoading, data } = useFetchWeather();

  useEffect(() => {
    fetchWeather(location);
  }, []); // spustí se při prvním renderu

  useEffect(() => {
    if (data && onTemperatureChange) {
      onTemperatureChange(data); // Voláme pouze pokud `data` existuje
    }
  }, [data, onTemperatureChange]); // Spustí se při změně `data`

  return (
    <div>
      {error ? location : ""}
      {isLoading ? "Loading weather..." : ""}
      {!isLoading && !error && data && <h3 style={{ fontSize: "15px", color: "gray" }}>{data}</h3>}
    </div>
  );
};
