

export const calcSumAndItems = () => {
    return (dispatch) => {
        dispatch({
            type: 'CALC_SUM_ITEMS'
        });
    }
}


export const addQuantityCart = (idItem) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_QUANTITY_CART',
            id: idItem
        });
    }
}


export const removeQuantityCart = (idItem) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_QUANTITY_CART',
            id: idItem
        });
    }
}


export const customQuantityCart = (idItem, value) => {
    return (dispatch) => {
        dispatch({
            type: 'CUSTOM_QUANTITY_CART',
            payload: {
                id: idItem,
                value: value
            }
        });
    }
}


export const removeItemCart = (idItem) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_ITEM_CART',
            id: idItem
        });
    }
}