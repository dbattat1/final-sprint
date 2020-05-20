import httpService from './httpService';

export default {
    query,
    getById
}

function query() {
    console.log('hello from cityService');
    return httpService.get('city')
}

function getById(cityId) {
    console.log('hello from getById', cityId);
    return httpService.get(`city/${cityId}`)
}