const initialState = {
    currProduct: null,
    products: []
}

export default function productReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                currProduct: action.product
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}