'use client'

import { Navbar } from '@/components/Navbar'
import { SearchBar } from '@/components/search-bar';
import axios from 'axios'
import Image from 'next/image';
import React, {  useState } from 'react'

interface weatherData {
  main : {
    temp : number
    feels_like : number
    humidity : number
  };
  weather: {
    main: string;
    description: string;
    temp : number
    icon : string
  }[];
  name : string

}

const Page = () => {
  const [weather, setWeather] = useState<weatherData | null>(null)

  const handleSearch = async (city) =>{
    const Response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`)
      setWeather(Response.data)
      console.log(Response.data)
    }


  return <div>
    <Navbar/>
    <SearchBar onSearch={handleSearch}/>
    {weather && (
      <div>
        <h2>Weather in {weather.name}</h2>
        <p>{weather.main.feels_like}C</p>
        <p>{weather.weather[0].main}</p>
        <Image 
          width={100}
          height={100}
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description} />
      </div>
    )}
  </div>
}

export default Page