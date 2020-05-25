import httpService from './httpService';
export default {
    query,
    queryAll,
    get,
    update,
    getFav
}
// JsonServer
// function query(cityId) {
//     return httpService.get(`user?product.city._id=${cityId}`)
// }

function query(cityId) {
    return httpService.get(`user/city/${cityId}`)
}

function queryAll() {
  return  httpService.get(`user`)
}

function getFav(favIds){
    console.log('from product service',favIds)
    return httpService.get(`user?_id=${favIds[0]}&_id=${favIds[1]}&_id=${favIds[2]}&_id=${favIds[3]}`)
}

function get(userId) {
    console.log('id',userId);
    
    return httpService.get(`user/${userId}`)
}

function update(user) {
    console.log('i am in update at productservice', user._id)
    return httpService.put(`user/${user._id}`, user);
  }
