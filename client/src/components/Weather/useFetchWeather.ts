import { useAsyncActionTracker } from "../../hooks/useAsyncActionTracker";
import { getWeather } from "./utils";

export const useFetchWeather = () => {
  const {
    error,
    isLoading,
    data,
    execute
  } = useAsyncActionTracker<string, string>({ // prvním generickým typem string určuju, co moje metoda action vrací, druhý string určuje, jaké parametry metoda action dostává, tj. cityName:string
    action: (cityName: string) => getWeather(cityName)
  });
  // parametr do useAsyncActionTracker je jen action (ostatní dobrovolné), action je funkce, která něco dělá
  const fetchWeather = (cityName: string) => execute(cityName);

  return { error, isLoading, data, fetchWeather };
};
