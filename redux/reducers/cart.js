import * as actionTypes from '../actions/actionTypes';

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

const cartReducer = (state = initState, action) => {
 
    return state;
};

export default cartReducer;

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