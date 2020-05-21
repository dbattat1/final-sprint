import productService from '../services/productService.js'


export function loadProduct(userId) {
    return async dispatch => {
      try {
        const {product} = await productService.get(userId);
        console.log(product);
        dispatch(setProduct(product));
      } catch (err) {
        console.log('ProductActions: err in loadProduct', err);
      }
    };
  }
  export function loadProducts(cityId) {
    return async dispatch => {
      try {
        const users = await productService.query(cityId);
        const products = users;
        // const products = _makeProductFromUsers(users);
        // console.log(products);
        dispatch(setProducts(products));
      } catch (err) {
        console.log('ProductActions: err in loadProducts', err);
      }
    };
  }

  export function removeProduct(user) {
    return async dispatch => {
      try {
        await productService.remove(user);
        dispatch(_removeProduct(user));
      } catch (err) {
        console.log('ProductActions: err in removeProduct', err);
      }
    };
  }

  function setProducts(products) {
    return {
      type: 'SET_PRODUCTS',
      products
    };
  }
  
  function setProduct(product) {
    return {
      type: 'SET_PRODUCT',
      product
    };
  }

  function _removeProduct(userId) {
    return {
      type: 'PRODUCT_REMOVE',
      userId
    };
  }

 function _makeProductFromUsers(users){
    const products = users.map(user => user.product);
    return products;
 }

