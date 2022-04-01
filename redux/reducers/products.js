// import * as actionTypes from '../actions/actionTypes';

// const initState = {
//     totalSum: 0,
//     itemsInCart: 0,
//     items: []
// };



// export const setStateReducer = (state = initState, action) => {

//     if (action.type === 'SET_CURRENT_STATE') {  

//         return action.store;
//     }
//     return state;
// };


// export const productsReducer = (state = initState, action) => {

//     if (action.type === actionTypes.ADD_ITEM) {
//         const newState = {
//             totalSum: state.totalSum + (action.item.price * action.item.quantity),
//             itemsInCart: state.itemsInCart + action.item.quantity,
//             items: state.items.map(item => { return { ...item } })
//         };
//         const item = newState.items.find(item => item._id === action.item._id);
//         if (item) {
//             item.quantity += action.item.quantity;
//             item.totalSumItem += action.item.totalSumItem;
//             console.log('adding quantity', item);
//         } else {
//             newState.items.push(action.item);
//             console.log(newState);
//         }
//         console.log('initstate', state.totalSum);
//         console.log('initStateItems', state.items)
//         console.log('newState', newState.totalSum);
//         console.log('newStateItems', newState.items);


//         localStorage.setItem("store", newState);

//         return newState;
//     }


//     return state;
// };


// export const cartReducer = (state = initState, action) => {


//     if (action.type === 'CALC_SUM_ITEMS') {
//         let newSum = 0;
//         let newItemsInCart = 0;
//         if (state.items.length > 0) {
//             for (let item of state.items) {
//                 newSum += item.totalSumItem;
//                 newItemsInCart += item.quantity;
//             }
//         }
//         return { 
//             ...state,
//             totalSum: newSum,
//             itemsInCart: newItemsInCart
//         }
//     }


//     if (action.type === 'CHANGE_QUANTITY_CART') {
//         let updatedItems = JSON.parse(JSON.stringify(state.items));
//         for (let item of updatedItems) {
//             if (item.id === action.payload.id) {
//                 if (action.payload.changeQuantity === 0) {
//                     item.quantity = ''; 
//                 } else {
//                     item.quantity = item.quantity + action.payload.changeQuantity;  
//                     // item.quantity = action.payload.prevQuantity + action.payload.changeQuantity;  
//                     item.totalSumItem = item.quantity * item.price;
//                 }
//                 break;
//             }
//         }
//         return {
//             ...state,
//             items: updatedItems
//         }

//     }

//     if (action.type === 'REMOVE_ITEM_CART') {
//         let updatedItems = state.items.filter(item => item.id !== action.id);
//         return {
//             ...state,
//             items: updatedItems
//         }
//     }

    
//     return state;
// };
