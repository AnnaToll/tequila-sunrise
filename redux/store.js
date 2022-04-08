import { rootReducer, persistedRootReducer } from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"
import { persistStore } from 'redux-persist';


const middleware = [thunk]

const makeStore = ({ isServer }) => {

    if (isServer) {
        return createStore(rootReducer, compose(applyMiddleware(...middleware)))
    } else {
        const store = createStore(persistedRootReducer, compose(applyMiddleware(...middleware)))
        store._persistor = persistStore(store);

        return store;
    }
}

export const wrapper = createWrapper(makeStore);

