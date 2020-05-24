import httpService from './httpService';
export default {
    query,
    get,
    update,
    getFav
}

function query(cityId) {
    return httpService.get(`user?product.city._id=${cityId}`)
}

function getFav(favIds){
    console.log('from product service',favIds)
    return httpService.get(`user?_id=${favIds[0]}&_id=${favIds[1]}&_id=${favIds[2]}&_id=${favIds[3]}`)
}

function get(userId) {
    return httpService.get(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user);
  }
