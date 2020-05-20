import cityService from '../services/cityService.js';

export function loadCities() {
    return dispatch => {
        cityService.query()
        .then(cities => dispatch({
          type: 'SET_CITIES', cities
        }))
    }
  }
  
  export function loadCity(cityId) {
    return dispatch => {
        cityService.get(cityId)
        .then(city => dispatch({
          type: 'SET_CITY', city
        }))
    }
  }
