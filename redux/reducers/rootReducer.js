import { combineReducers } from 'redux';
import { productsReducer, cartReducer, setStateReducer} from './products';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    setStateReducer: setStateReducer
});

export default rootReducer;
