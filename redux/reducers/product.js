import * as actionTypes from '../actions/actionTypes';

const initState = {
    totalSum: 0,
    itemsInCart: 0,
    products: []
};

const productsReducer = (state = initState, action) => { //ta bort innan commit
    if (action.type === actionTypes.addProduct) {
        const newState = {
            totalSum: state.totalSum + (action.product.price * action.product.quantity),
            itemsInCart: state.itemsInCart + action.product.quantity,
            products: [...state.products]
        };
        const product = newState.products.find(product => product._id === action.product._id);
        if (product) {
            product.quantity += action.product.quantity;
            console.log('adding quantity', product);
        } else {
            newState.products.push(action.product);
            console.log(newState);
        }
        return newState;
    }
    return state;
};

export default productsReducer;

// const productsReducer = (state = initState, action) => {

//     return state;
// };

// export default productsReducer;

/* import * as actionTypes from '../actions/actionTypes';
const initialState = {
    count: 0,
}; //Initial state of the counter

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTER_INCRIMENT:
            return {
                count: state.count + 1,
            };

        case actionTypes.COUNTER_DECRIMENT:
            return {
                count: state.count - 1,
            };

        default: return state;
    }
};

export default reducer; */