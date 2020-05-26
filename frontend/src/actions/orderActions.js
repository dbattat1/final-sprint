import orderService from '../services/orderService.js'

export function loadOrder(orderId) {
  console.log('order id', orderId);
  return async dispatch => {
    try {
      const order = await orderService.query(orderId);
      console.log('order action', order);

      dispatch(setOrder(order));
    } catch (err) {
      console.log('OrderActions: err in loadOrder', err);
    }
  };
}

export function addOrder(newOrder) {
  return async dispatch => {
    try {
      const order = await orderService.add(newOrder);
      console.log('order action', newOrder);
      // dispatch(setOrder(order));
    } catch (err) {
      console.log('OrderActions: err in loadOrder', err);
    }
  };
}
function setOrder(order) {
  return {
    type: 'SET_ORDER',
    order
  };
}