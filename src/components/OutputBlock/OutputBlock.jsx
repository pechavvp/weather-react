import React, { useState, useContext } from 'react';
import LocationsBlock from '../LocationsBlock/LocationsBlock';
import WeatherBlock from '../WeatherBlock/WeatherBlock';
import classes from './OutputBlock.module.css';
import { FavoritesContext } from '../../Context/context';
import { getFavoriteCities } from '../../storage/storage';

function OutputBlock() {
  const [favoritesList, setFavoritesList] = useState(getFavoriteCities);

  return (
    <div className={classes.output_block}>
      <FavoritesContext.Provider value={[favoritesList, setFavoritesList]}>
        <WeatherBlock/>
        <LocationsBlock/>
      </FavoritesContext.Provider>
    </div>
  )
}

export default OutputBlock;