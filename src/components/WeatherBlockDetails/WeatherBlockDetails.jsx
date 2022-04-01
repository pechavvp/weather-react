import React, { useContext } from 'react';
import classes from './WeatherBlockDetails.module.css';
import { Context } from '../../Context/context';

function WeatherBlockDetails() {
  const [responseInfo, setResponseInfo] = useContext(Context);
  let cityName = "Waiting for a response...";
  let degree = "";
  let tempFeels = "";
  let weather = "";
  let sunrise = "";
  let sunset = "";

  function tempInCels(temp) {
    let cels = Math.round(temp - 273.15);
    if (cels > 0) {
      cels = "+" + cels;
    }
    return cels;
  };

  function correctTime(time) {
    return new Date(time*1000).toLocaleTimeString('en-GB');
  };

  if (responseInfo) {
    cityName = responseInfo.name;
    degree = tempInCels(responseInfo.main.temp) + "\u00B0";
    tempFeels = tempInCels(responseInfo.main.feels_like) + "\u00B0";
    weather = responseInfo.weather[0].main;
    sunrise = correctTime(responseInfo.sys.sunrise);
    sunset = correctTime(responseInfo.sys.sunset);
  }

  return (
    <div className={classes.weather_block_details}>
        <div className={classes.weather_block_details_wrap}>
            <p className={classes.weather_block_details_title_text}>{cityName}</p>
            <div className={classes.weather_block_details_list}>
                <ul className={classes.weather_block_details_list_items}>
                    <li className={classes.weather_block_details_list_item + " " + classes.details_temp}><b>Temperature:</b> {degree}</li>
                    <li className={classes.weather_block_details_list_item + " " + classes.details_feels}><b>Feels like:</b> {tempFeels}</li>
                    <li className={classes.weather_block_details_list_item + " " + classes.details_weather}><b>Weather:</b> {weather}</li>
                    <li className={classes.weather_block_details_list_item + " " + classes.details_sunrise}><b>Sunrise:</b> {sunrise}</li>
                    <li className={classes.weather_block_details_list_item + " " + classes.details_sunset}><b>Sunset:</b> {sunset}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WeatherBlockDetails;