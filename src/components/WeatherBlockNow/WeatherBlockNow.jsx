import React, { useContext, useState } from 'react';
import classes from './WeatherBlockNow.module.css';
import loadingIcon from '../../img/loading.png';
import likeIcon from '../../img/like-icon.png';
import likedIcon from '../../img/liked-icon.png';
import { Context, FavoritesContext } from '../../Context/context';
import { saveFavoriteCities } from '../../storage/storage';

function WeatherBlockNow() {
  const [responseInfo, setResponseInfo] = useContext(Context);
  const [favoritesList, setFavoritesList] = useContext(FavoritesContext);

  let weatherIcon = loadingIcon;
  let degree = "";
  let cityName = "";
  let favoritesIcon = likeIcon;
  let citiesList = favoritesList.slice();

  function tempInCels(temp) {
    let cels = Math.round(temp - 273.15);
    if (cels > 0) {
      cels = "+" + cels;
    }
    return cels;
  };

  function addToFavorites() {
    if (citiesList.includes(cityName)) {
      alert("This city is already in favorites!");
    } else {
      if (citiesList.length == 6) {
        citiesList.shift();
      }
      citiesList.push(cityName);
      saveFavoriteCities(citiesList);
      setFavoritesList(citiesList);
    }
  }

  if (responseInfo) {
    weatherIcon = `https://openweathermap.org/img/wn/${responseInfo.weather[0].icon}@2x.png`;
    degree = tempInCels(responseInfo.main.temp) + "\u00B0";
    cityName = responseInfo.name;
    if (citiesList.includes(cityName)) {
      favoritesIcon = likedIcon;
    }
  }

  return (
    <div className={classes.weather_block_now}>
        <p className={classes.weather_block_show_degree}>{degree}</p>
        <p className={classes.weather_block_show_city}>{cityName}</p>
        <img className={classes.weather_block_show_icon} src={weatherIcon} alt="weather"/>
        <img className={classes.weather_block_show_like} src={favoritesIcon} alt="like" onClick={addToFavorites}/>
    </div>
  )
}

export default WeatherBlockNow;