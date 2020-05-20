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

export function loadProducts(cityId) {
    return async dispatch => {
        try {
            const products = await productService.query(cityId);
            console.log(products);
            dispatch(setProducts(products));
        } catch (err) {
            console.log('ProductActions: err in loadProducts', err);
        }
    };
}
function setProducts(products) {
    return {
        type: 'SET_PRODUCTS',
        products
    };
}
