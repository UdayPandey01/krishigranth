"use client";

import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/search-bar";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

import Clear from "@/assests/Clear.jpg";
import Clouds from "@/assests/Cloudy.jpg";
import Rain from "@/assests/Rain.jpg";
import Thunderstorm from "@/assests/Thunderstorm.jpg";
import Snow from "@/assests/Snow.jpg";
import Mist from "@/assests/Mist.jpg";
import Haze from "@/assests/Haze.jpg";
import Wind from "@/assests/Windy.jpg";

interface weatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    temp: number;
    icon: string;
  }[];
  name: string;
}

const getBackgroundImage = (weatherCondition: string) => {
  switch (weatherCondition) {
    case "Clear":
      return Clear;
    case "Clouds":
      return Clouds;
    case "Rain":
      return Rain;
    case "Thunderstorm":
      return Thunderstorm;
    case "Snow":
      return Snow;
    case "Mist":
      return Mist;
    case "Haze":
      return Haze;
    case "Wind":
      return Wind;
    default:
      return Clear;
  }
};

const Page = () => {
  const [weather, setWeather] = useState<weatherData | null>(null);

  const handleSearch = async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );
    setWeather(response.data);
    console.log(response.data);
  };

  const weatherBg = weather
    ? getBackgroundImage(weather.weather[0].main)
    : Clear;

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        color: "white",
      }}
    >
      <Image
        src={weatherBg.src}
        alt="Background"
        layout="fill"
        objectFit="cover"
        style={{
          filter: "blur(8px)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Navbar/>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-2">
        <div className="mt-10 flex items-center justify-center">
          {weather && (
            <Image
              width={100}
              height={100}
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          )}
        </div>
        <div className="mt-10 flex items-center justify-center">
          {weather && (
            <div>
              <h2 className="text-6xl font-semibold">Weather in {weather.name}</h2>
              <p className="mt-2 text-xl">Feels like: {weather.main.feels_like}°C</p>
              <p>Condition: {weather.weather[0].main}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
