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

function queryAll(filterBy) {
    return httpService.get(`user`)
}

function queryAllFilter(filterBy) {
    var queryStr = `?name=${filterBy.name}&`;
    return httpService.get(`user`)
}

function query(filterBy) {
    var queryStr = `?name=${filterBy.name}&sort=anaAref`;
    return HttpService.get(`review${queryStr}`);
  }

function getFav(favIds) {
    var query = '?';
    favIds.forEach((favId, idx) => {
        query += `id${idx}=${favId}&`
    });
    return httpService.get(`user/fav/${query}`)
}

function get(userId) {
    return httpService.get(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user);
}
