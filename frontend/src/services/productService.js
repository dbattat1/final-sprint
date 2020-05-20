import httpService from './httpService';
export default {
    query,
    get,  
}

function query(cityId) {
    console.log('hello from cityService');
    return httpService.get(`user?product.city._id=${cityId}`)
}

function get(userId) {
    return httpService.get(`user/${userId}`)
}
