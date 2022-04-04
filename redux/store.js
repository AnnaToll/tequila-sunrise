import {rootReducer, persistedRootReducer} from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"
import { persistStore } from 'redux-persist';


const middleware = [thunk]

const makeStore = ({ isServer }) => {

    if (isServer) {
       return createStore(rootReducer, compose(applyMiddleware(...middleware)))
    } else {
        const userCookie = localStorage.getItem('persist:user');
        // if (typeof window !== 'undefined') {
        //     const cartCookie = localStorage.getItem('persist:user');
            
        // }
        const store = createStore(persistedRootReducer, compose(applyMiddleware(...middleware)))
        store._persistor = persistStore(store);

        return store;
    }
} 

export const wrapper = createWrapper(makeStore);

/* import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const middleware = [thunk]

const makeStore = ({ isServer }) => {

    if (isServer) {
       return createStore(rootReducer, compose(applyMiddleware(...middleware)))
    } else {

        const persistedReducer = persistReducer(persistConfig, rootReducer);
        const store = createStore(persistedReducer, compose(applyMiddleware(...middleware)))
        store._persistor = persistStore(store);

        return store;

    }
} 

    
export const wrapper = createWrapper(makeStore); */