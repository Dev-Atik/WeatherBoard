import Header from "./components/header/Header";
import WeatherBoard from "./components/weatherboard/WeatherBoard";

export default function Page() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <WeatherBoard />
    </div>
  );
}
