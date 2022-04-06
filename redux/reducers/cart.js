import * as actionTypes from '../actions/actionTypes';

const initState = {
    totalSum: 0,
    itemsInCart: 0,
    items: []
};

const cartReducer = (state = initState, action) => {



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
            ...state,
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
        return {
            ...state,
            items: updatedItems
        }

    }
 

    if (action.type === 'REMOVE_ITEM_CART') {
        let updatedItems = state.items.filter(item => item._id !== action.id);
        return {
            ...state,
            items: updatedItems
        }
    }


    return state;

};

export default cartReducer;
