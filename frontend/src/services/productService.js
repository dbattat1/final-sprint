import httpService from './httpService';

export default {
    get,   
}

function get(userId) {
    return httpService.get(`user/${userId}`)
}
