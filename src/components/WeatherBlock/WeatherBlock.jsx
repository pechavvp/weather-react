import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MenuBlock from '../MenuBlock/MenuBlock';
import WeatherBlockDetails from '../WeatherBlockDetails/WeatherBlockDetails';
import WeatherBlockForecast from '../WeatherBlockForecast/WeatherBlockForecast';
import WeatherBlockNow from '../WeatherBlockNow/WeatherBlockNow';
import classes from './WeatherBlock.module.css';

function WeatherBlock() {
  return (
    <div className={classes.weather_block}>
          <Routes>
            <Route path="/" element={<WeatherBlockNow/>}/>
            <Route path="/details" element={<WeatherBlockDetails/>}/>
            <Route path="/forecast" element={<WeatherBlockForecast/>}/>
          </Routes>
        <MenuBlock/>
    </div>
  )
}

export default WeatherBlock;