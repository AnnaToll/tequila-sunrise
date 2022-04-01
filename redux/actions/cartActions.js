

export const calcSumAndItems = () => {
    return (dispatch) => {
        dispatch({
            type: 'CALC_SUM_ITEMS'
        });
    }
}


export const removeItemCart = (idItem, quantity) => {
    return async (dispatch) => {

        fetch('/api/return-quantity', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: idItem,
                returnQuantity: quantity
            })
        })
        .then(res => res.json())
        .then((data) => {
            if(data.success) {
                dispatch({
                    type: 'REMOVE_ITEM_CART',
                    id: idItem
                });
            }
        })
    }
}


export const changeQuantityCart = (idItem, changeQuantity) => {
    return async (dispatch) => {

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
                }
            });
        }) 
    }
}

export const clearCartPurchase = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_CART_PURCHASE'
        });
    }
}


