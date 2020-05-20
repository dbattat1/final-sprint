import cityService from '../services/cityService';

export function loadCities() {
  console.log('loadcities');
  
    return dispatch => {
        cityService.query()
        .then(cities => dispatch({
          type: 'SET_CITIES', cities
        }))
    }
  }
  
  export function loadCity(cityId) {
    return dispatch => {
        cityService.getById(cityId)
        .then(city => dispatch({
          type: 'SET_CITY', city
        }))
    }
  }
