import httpService from './httpService';
export default {
    query,
    queryBySeller,
    querybyBuyer,
    add
    // get,
    // update,
    // getFav
}

function query(orderId) {
    return httpService.get(`order/${orderId}`)
}
function queryBySeller(sellerId) {
    return httpService.get(`order/seller/${sellerId}`)
}
function querybyBuyer(buyerId) {
    return httpService.get(`order/buyer/${buyerId}`)
}
async function add(newOrder) {
    return  httpService.post(`order`, newOrder);
  }
  

// function queryAll() {
//   return  httpService.get(`order`)
// }


// function get(userId) {
//     console.log('id',userId);
    
//     return httpService.get(`user/${userId}`)
// }

// function update(user) {
//     console.log('i am in update at productservice', user._id)
//     return httpService.put(`user/${user._id}`, user);
//   }
