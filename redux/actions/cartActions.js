

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