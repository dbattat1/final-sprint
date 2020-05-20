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
  
  function setProduct(product) {
    return {
      type: 'SET_PRODUCT',
      product
    };
  }

