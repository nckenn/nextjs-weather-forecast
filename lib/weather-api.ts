import axios from "axios";

export async function getWeatherByCityName(cityName: string) {
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    const res =  await axios.get(url);
  
    return res.data;
  }
  