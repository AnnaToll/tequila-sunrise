import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"

const middleware = [thunk]

const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore);