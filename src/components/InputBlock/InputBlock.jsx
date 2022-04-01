import React, { useContext } from 'react';
import classes from './InputBlock.module.css';
import { CurrentCityContext } from '../../Context/context';

function InputBlock() {
  const [city, setCity] = useContext(CurrentCityContext);

  function formSubmit(e) {
    e.preventDefault();
    setCity(e.target.firstChild.value);
    e.target.firstChild.value = "";
  }

  return (
    <div className={classes.input_block}>
        <form onSubmit={formSubmit}>
            <input className={classes.input_text} type="text" placeholder="Enter the city"/>
            <button className={classes.input_button} type="submit"></button>
        </form>
    </div>
  )
}

export default InputBlock;