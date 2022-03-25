const initState = {
    totalSum: 0,
    itemsInCart: 0,
    items: [
        {
            id: 1,
            title: "tequila 1",
            img: "/dmitry-dreyer-7hHRTw_-1SY-unsplash.jpg",
            price: 299,
            quantity: 1
        },
        {
            id: 2,
            title: "Tequila 2",
            img: "/fidel-fernando-tfLBYGwDews-unsplash.jpg",
            price: 249,
            quantity: 2
        }
    ]
};

const rootReducer = (state = initState, action) => {


    if (action.type = 'CALC_SUM_ITEMS') {
        let newSum = 0;
        let newItemsInCart = 0;
        for (let item of state.items) {
            let productSum = item.price * item.quantity;
            newSum += productSum;
            newItemsInCart += item.quantity;
        }
        return { 
            ...state,
            totalSum: newSum,
            itemsInCart: newItemsInCart
        }
    }


    if (action.type === 'ADD_QUANTITY_CART') {

        let updatedItems = [...state.items];

        for (let item of updatedItems) {
            if (item.id === action.id) {
                item.quantity = item.quantity + 1;
                break;
            }
        }



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