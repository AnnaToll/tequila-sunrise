const initState = {
    totalSum: 0,
    itemsInCart: 0,
    items: [
        {
            id: '623c4bb7ad3085a867593522',
            title: "tequila 1",
            img: "/dmitry-dreyer-7hHRTw_-1SY-unsplash.jpg",
            price: 299,
            quantity: 1,
            totalSumItem: 299
        },
        {
            id: '623c4d53ad3085a867593524',
            title: "Tequila 2",
            img: "/fidel-fernando-tfLBYGwDews-unsplash.jpg",
            price: 249,
            quantity: 2,
            totalSumItem: 498
        }
    ]
};

const rootReducer = (state = initState, action) => {


    if (action.type === 'CALC_SUM_ITEMS') {
        let newSum = 0;
        let newItemsInCart = 0;
        if (state.items.length > 0) {
            for (let item of state.items) {
                newSum += item.totalSumItem;
                newItemsInCart += item.quantity;
            }
        }
        return { 
            ...state,
            totalSum: newSum,
            itemsInCart: newItemsInCart
        }
    }


    if (action.type === 'ADD_QUANTITY_CART') {
        let updatedItems = JSON.parse(JSON.stringify(state.items));
        for (let item of updatedItems) {
            if (item.id === action.id) {
                item.quantity = item.quantity + 1;
                item.totalSumItem = item.quantity * item.price;
                break;
            }
        }
        return {
            ...state,
            items: updatedItems
        }
    }

    if (action.type === 'REMOVE_QUANTITY_CART') {
        let updatedItems = JSON.parse(JSON.stringify(state.items));
        for (let item of updatedItems) {
            if (item.id === action.id) {
                if (item.quantity > 1) {
                    item.quantity = item.quantity - 1;
                    item.totalSumItem = item.quantity * item.price;
                }
                break;
 
            }
        }
        return {
            ...state,
            items: updatedItems
        }
    }

    if (action.type === 'CUSTOM_QUANTITY_CART') {
        let updatedItems = JSON.parse(JSON.stringify(state.items));
        for (let item of updatedItems) {
            if (item.id === action.payload.id) {
                if (!action.payload.value) {
                    item.quantity = '';  
                    
                } else {
                    item.quantity = action.payload.value;  
                    item.totalSumItem = item.quantity * item.price;
                }
                break;
            }
        }
        return {
            ...state,
            items: updatedItems
        }
    }

    if (action.type === 'REMOVE_ITEM_CART') {
        let updatedItems = state.items.filter(item => item.id !== action.id);
        return {
            ...state,
            items: updatedItems
        }
    }

    return state;

};

export default rootReducer;


/* import { combineReducers } from 'redux';
import productsReducer from './products';

const rootReducer = combineReducers({
    products: productsReducer
});

export default rootReducer; */