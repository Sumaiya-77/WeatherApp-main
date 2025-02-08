import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 17.49, 
        humidity : 20,
        temp: 19.01, 
        tempMax: 19.01, 
        tempMin: 19.01, 
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
       <div className="outer">
        <div className="WeatherApp">
            <h1>Weather App </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        </div>
    )
}