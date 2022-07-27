import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";

const API_KEY="46c9584d90d50c5fdf6a7ddfc6f4b9db";
const BASE_URL='https://api.openweathermap.org/data/2.5';

const getWeatherData=(infoType,searchParams)=>{
    const url=new URL(BASE_URL+"/"+infoType);
    url.search=new URLSearchParams({...searchParams,appid:API_KEY})

    return fetch(url)
    .then((res)=>res.json())
};

const formattedWeather=(data)=>{
    const {
        coord:{lat,lon},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed}
    }=data
        const {main:details,icon}=weather[0]
    return {lat,lon,temp,feels_like,temp_min,temp_min,humidity,name,dt,country,details,icon,sunrise,sunset,weather,speed}
}


const getFormattedWeatherData=async (searchParams)=>{
  const formattedWeatherData=await getWeatherData('weather',searchParams)
  .then(formattedWeather)

  return formattedWeatherData
}

export default getFormattedWeatherData
