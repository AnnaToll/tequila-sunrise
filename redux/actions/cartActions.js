

export const calcSumAndItems = () => {
    return (dispatch) => {
        dispatch({
            type: 'CALC_SUM_ITEMS'
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


export const changeQuantityCart = (idItem, changeQuantity, prevQuantity) => {
    return async (dispatch) => {
        if (changeQuantity === 0) {
            dispatch({
                type: 'CHANGE_QUANTITY_CART',
                payload: {
                    id: idItem,
                    changeQuantity: changeQuantity,
                    inStorage: true
                }
            });
        } else {
            fetch('/api/check-quantity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    id: idItem,
                    changeQuantity: changeQuantity
                })
            })
            .then(res => res.json()) 
            .then((data) => {
                dispatch({
                    type: 'CHANGE_QUANTITY_CART',
                    payload: {
                        id: idItem,
                        changeQuantity: changeQuantity,
                        inStorage: data.inStorage,
                        prevQuantity: prevQuantity
                    }
                });
            })
        }
        
    }
}

