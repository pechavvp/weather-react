import React, { useEffect, useState } from 'react';
import './styles/App.css';
import InputBlock from './components/InputBlock/InputBlock';
import OutputBlock from './components/OutputBlock/OutputBlock';
import { Context, ForecastContext, CurrentCityContext } from './Context/context';
import { saveCurrentCity, getCurrentCity } from './storage/storage';



function App() {
  const [city, setCity] = useState(getCurrentCity);
  const [responseInfo, setResponseInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState(null);

  useEffect(() => {
    loadInfo(city);
  }, [city]);


  async function loadInfo(cityName) {
    const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const forecastServerUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const apiKey = 'add70dd1502a125caad4cec4fdea9bec';
    let url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    let forecastUrl = `${forecastServerUrl}?q=${cityName}&appid=${apiKey}`;

    let outputInfo = await fetch(url)
    .then(response => response.json())
    .then(function(response) {
        if (response.cod === "400") {
            throw new Error("Enter city name!");
        } else if (response.cod === "404") {
            throw new Error("Incorrect city name!");
        } else {
            console.log(response);
            saveCurrentCity(response.name);
            setResponseInfo(response);
        }
    })
    .catch(err => alert(err.message)); 

    let forecastInfo = await fetch(forecastUrl)
    .then(response => response.json())
    .then(function(response) {
        if (response.cod === "400") {
            throw new Error("Enter city name!");
        } else if (response.cod === "404") {
            throw new Error("Incorrect city name!");
        } else {
            console.log(response);
            setForecastInfo(response);
        }
    })
    .catch(err => console.log(err.message));
}

  return (
    <div className="App">
      <CurrentCityContext.Provider value={[city, setCity]}>
        <Context.Provider value={[responseInfo, setResponseInfo]}>
          <ForecastContext.Provider value={[forecastInfo, setForecastInfo]}>
            <InputBlock/>
            <OutputBlock/>
          </ForecastContext.Provider>
        </Context.Provider>
      </CurrentCityContext.Provider>
    </div>
  );
}

export default App;
