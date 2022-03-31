import { combineReducers } from 'redux';
import { productsReducer, cartReducer} from './products';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default rootReducer;