import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function Weather() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Lahore",
    feelsLike: 25.5,
    humidity: 30,
    temp: 27.3,
    weather: "Sunny",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div>
      <h3>Weather App</h3>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
