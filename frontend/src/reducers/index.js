import { combineReducers } from 'redux';
import cityReducer from './cityReducer' 
// import ReviewReducer from './ReviewReducer'
// import UserReducer from './UserReducer'
// import SystemReducer from './SystemReducer';

const rootReducer = combineReducers({
    //   system: SystemReducer,
    //   review: ReviewReducer,
    //   user: UserReducer
    city: cityReducer
})

export default rootReducer;