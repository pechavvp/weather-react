import React, { useContext } from 'react';
import classes from './LocationsBlock.module.css';
import { FavoritesContext, CurrentCityContext } from '../../Context/context';
import { saveFavoriteCities } from '../../storage/storage';

function LocationsBlock() {
  const [favoritesList, setFavoritesList] = useContext(FavoritesContext);
  const [city, setCity] = useContext(CurrentCityContext);

  let favoriteItems = [];

  function deleteFromFavorites(city) {
    let cities = favoritesList.slice();
    let indexOfDeleteCity = cities.indexOf(city);
    cities.splice(indexOfDeleteCity, 1);
    saveFavoriteCities(cities);
    setFavoritesList(cities);
  }

  function loadCityFromFavorites(city) {
    setCity(city);
  }

  if (favoritesList.length > 0) {
    favoriteItems = favoritesList.map((item) => {
      return (
        <li key={item} className={classes.locations_block_list_item}><p className={classes.locations_block_list_item_cityname} onClick={() => loadCityFromFavorites(item)}>{item}</p><button className={classes.delete_icon} onClick={() => deleteFromFavorites(item)}></button></li>
      )
    })
  }

  return (
    <div className={classes.locations_block}>
        <div className={classes.locations_block_title}><p className={classes.locations_block_title_text}>Added Locations:</p></div>
        <div className={classes.locations_block_list}>
            <ul className={classes.locations_block_list_items}>
              {favoriteItems}
            </ul>
        </div>
    </div>
  )
}

export default LocationsBlock;