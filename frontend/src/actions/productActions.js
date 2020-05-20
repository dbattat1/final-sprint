import productService from '../services/productService.js'

export function loadProduct(userId) {
    return async dispatch => {
      try {
        const user = await productService.get(userId);
        console.log(user);
        dispatch(setProduct(user));
      } catch (err) {
        console.log('ProductActions: err in loadProduct', err);
      }
    };
  }

  function setProduct(user) {
    return {
      type: 'SET_PRODUCT',
      user
    };
  }