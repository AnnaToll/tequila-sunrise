import { combineReducers } from 'redux';
import cartReducer from './cart';
import userReducer from './user';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
});

const persistConfigCart = {
    key: 'cart',
    storage
}

const persistConfigUser = {
    key: 'user',
    storage
}

const persistedCartReducer = persistReducer(persistConfigCart, cartReducer);
const persistedUserReducer = persistReducer(persistConfigUser, userReducer);

export const persistedRootReducer = combineReducers({
    cart: persistedCartReducer,
    user: persistedUserReducer
})

