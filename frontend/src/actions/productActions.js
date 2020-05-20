import productService from '../services/productService.js'

export function loadProduct(productId) {
    return async dispatch => {
        try {
            const product = await productService.get(productId);
            console.log(product);
            dispatch(setProduct(product));
        } catch (err) {
            console.log('ProductActions: err in loadProduct', err);
        }
    };
}
function setProduct(product) {
    return {
        type: 'SET_PRODUCT',
        product
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