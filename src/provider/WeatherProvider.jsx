import { WeatherContext } from "../context/context";
import useWeather from "../hooks/useWeather";

export default function WeatherProvider({ children }) {
  const { weatherData, loading, error } = useWeather();

  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
}
