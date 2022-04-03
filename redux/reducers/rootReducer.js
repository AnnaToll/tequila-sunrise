import * as actionTypes from '../actions/actionTypes';

const initState = {
    userID: null,
    totalSum: 0,
    itemsInCart: 0,
    items: []
};

const rootReducer = (state = initState, action) => {

    if (action.type === 'SET_LOGGED_IN') {
        return {
            ...state,
            userID: action.id
        }
    }

    if (action.type === 'SET_CURRENT_STATE') {
        console.log("set-current-state", action.store);
        return action.store;
    }


    if (action.type === 'CLEAR_CART_PURCHASE') {
        return {
            ...state,
            totalSum: 0,
            itemsInCart: 0,
            items: []
        }
    }


    if (action.type === actionTypes.ADD_ITEM) {
        const newState = {
            totalSum: state.totalSum + (action.item.price * action.item.quantity),
            itemsInCart: state.itemsInCart + action.item.quantity,
            items: state.items.map(item => { return { ...item } })
        };
        const item = newState.items.find(item => item._id === action.item._id);
        if (item) {
            item.quantity += action.item.quantity;
            item.totalSumItem += action.item.totalSumItem;
            console.log('adding quantity', item);
        } else {
            newState.items.push(action.item);
            console.log(newState);
        }
        console.log('initstate', state.totalSum);
        console.log('initStateItems', state.items)
        console.log('newState', newState.totalSum);
        console.log('newStateItems', newState.items);

        localStorage.setItem("store", JSON.stringify(newState));
        console.log('add-item', newState);
        return newState;
    }


    if (action.type === 'CALC_SUM_ITEMS') {
        let newSum = 0;
        let newItemsInCart = 0;
        if (state.items.length > 0) {
            for (let item of state.items) {
                newSum += item.totalSumItem;
                newItemsInCart += item.quantity;
            }
        }
        localStorage.setItem("store", JSON.stringify({
            ...state,
            totalSum: newSum,
            itemsInCart: newItemsInCart
        }));
        return {
            ...state,
            totalSum: newSum,
            itemsInCart: newItemsInCart
        }
    }


    if (action.type === 'CHANGE_QUANTITY_CART') {
        let updatedItems = JSON.parse(JSON.stringify(state.items));
        for (let item of updatedItems) {
            if (item._id === action.payload.id) {
                item.quantity = item.quantity + action.payload.changeQuantity;
                item.totalSumItem = item.quantity * item.price;
                break;
            }
        }
        localStorage.setItem("store", JSON.stringify({
            ...state,
            items: updatedItems
        }));
        return {
            ...state,
            items: updatedItems
        }

    }
    /*     if (action.type === 'CHANGE_QUANTITY_CART') {
            let updatedItems = [...state.items]
            for (let item of updatedItems) {
                if (item.id === action.payload.id) {
                    if (action.payload.changeQuantity === 0) {
                        item.quantity = ''; 
                    } else {
                        item.quantity = item.quantity + action.payload.changeQuantity;  
                        // item.quantity = action.payload.prevQuantity + action.payload.changeQuantity;  
                        item.totalSumItem = item.quantity * item.price;
                    }
                    break;
                }
            }
            // localStorage.setItem("store", JSON.stringify({
            //     ...state,
            //     items: updatedItems
            // }));
            return {
                ...state,
                items: updatedItems
            }
    
        } */

    if (action.type === 'REMOVE_ITEM_CART') {
        let updatedItems = state.items.filter(item => item._id !== action.id);
        localStorage.setItem("store", JSON.stringify({
            ...state,
            items: updatedItems
        }));
        return {
            ...state,
            items: updatedItems
        }
    }


    return state;

};

export default rootReducer;




// import { combineReducers } from 'redux';
// import { productsReducer, cartReducer, setStateReducer} from './products';

// const rootReducer = combineReducers({
//     products: productsReducer,
//     cart: cartReducer,
//     setStateReducer: setStateReducer
// });

// export default rootReducer;
