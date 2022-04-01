import React from 'react';
import classes from './MenuBlock.module.css';
import { NavLink } from 'react-router-dom';
import './MenuBlockStyles.css';

function MenuBlock() {
  return (
    <div className={classes.weather_block_menu}>
        <ul className={classes.weather_block_menu_list}>
            <li className={classes.weather_block_menu_item + " " + classes.menu_now}><NavLink to="/" className={classes.link}>Now</NavLink></li>
            <li className={classes.weather_block_menu_item + " " + classes.menu_details}><NavLink to="/details" className={classes.link}>Details</NavLink></li>
            <li className={classes.weather_block_menu_item + " " + classes.menu_forecast}><NavLink to="/forecast" className={classes.link}>Forecast</NavLink></li>
        </ul>
    </div>
  )
}

export default MenuBlock;