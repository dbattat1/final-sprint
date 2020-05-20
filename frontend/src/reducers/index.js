import { combineReducers } from 'redux';
import cityReducer from './cityReducer'
import productReducer from './productReducer'
import userReducer from './userReducer'
// import SystemReducer from './SystemReducer';
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  city: cityReducer
})
export default rootReducer;