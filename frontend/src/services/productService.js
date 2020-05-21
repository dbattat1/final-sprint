import httpService from './httpService';
export default {
    query,
    get,
    update  
}

function query(cityId) {
    return httpService.get(`user?product.city._id=${cityId}`)
}

function get(userId) {
    return httpService.get(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user);
  }
