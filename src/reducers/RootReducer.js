import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    product: ProductReducer
});

export default RootReducer;