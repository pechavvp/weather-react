import React, { useContext } from 'react';
import classes from './WeatherBlockForecast.module.css';
import { Context, ForecastContext } from '../../Context/context';

function WeatherBlockForecast() {
  const [forecastInfo, setForecastInfo] = useContext(ForecastContext);
  let cityName = "Waiting for a response...";
  let forecastItems = "";
  console.log(forecastInfo);

  function tempInCels(temp) {
    return Math.round(temp - 273.15)
  };

  if (forecastInfo) {
    cityName = forecastInfo.city.name;
    const forecastList = forecastInfo.list;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    forecastItems = forecastList.map((item) => {
      let dateFromItem = new Date(item.dt_txt);
      let forecastIconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
      return (
        <li key={item.dt.toString()} className={classes.weather_block_forecast_list_item}>
        <p className={classes.weather_block_forecast_date}>{dateFromItem.getDate() + " " + monthNames[dateFromItem.getMonth()]}</p>
        <p className={classes.weather_block_forecast_time}>{dateFromItem.getHours() + ":" + (dateFromItem.getMinutes()<10?'0':'') + dateFromItem.getMinutes()}</p>
        <div className={classes.weather_block_forecast_temp}>
            <p className={classes.weather_block_forecast_temp_fact}>Temperature: {tempInCels(item.main.temp)}&deg;</p>
            <p className={classes.weather_block_forecast_temp_feels}>Feels like: {tempInCels(item.main.feels_like)}&deg;</p>
        </div>
        <div className={classes.weather_block_forecast_weather}>
            <p className={classes.weather_block_forecast_weather_title}>{item.weather[0].main}</p>
            <img className={classes.weather_block_forecast_weather_icon} src={forecastIconUrl} alt="icon"/>
        </div>
        </li>
      )
    })
  }

  return (
    <div className={classes.weather_block_forecast}>
        <div className={classes.weather_block_forecast_wrap}>
            <p className={classes.weather_block_forecast_title_text}>{cityName}</p>
            <div className={classes.weather_block_forecast_list}>
                <ul className={classes.weather_block_forecast_list_items}>
                    {forecastItems}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WeatherBlockForecast;