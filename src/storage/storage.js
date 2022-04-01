export function saveFavoriteCities(arr) {
    localStorage.favoriteCitiesList = JSON.stringify(arr);
}

export function getFavoriteCities() {
    if (localStorage.favoriteCitiesList) {
        return JSON.parse(localStorage.favoriteCitiesList);
      } else {
        return [];
      }
}

export function saveCurrentCity(cityName) {
    localStorage.currentCity = cityName;
}

export function getCurrentCity() {
    if (localStorage.currentCity) {
        return localStorage.currentCity;
      } else {
        return "saint petersburg";
      }
}