import * as actionTypes from '../actions/actionTypes';

const initState = {
    userID: null
};

const userReducer = (state = initState, action) => {

    if (action.type === 'SET_LOGGED_IN') {
        return {
            ...state,
            userID: action.id
        }
    }

    return state;

};

export default userReducer;




// import { combineReducers } from 'redux';
// import { productsReducer, cartReducer, setStateReducer} from './products';

// const rootReducer = combineReducers({
//     products: productsReducer,
//     cart: cartReducer,
//     setStateReducer: setStateReducer
// });

// export default rootReducer;
