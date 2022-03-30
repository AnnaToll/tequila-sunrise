import { ADD_ITEM } from '/redux/actions/actionTypes';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../styles/Product.module.css';

function PutInCart(props) {
    const dispatch = useDispatch();

    const putInCartHandler = async (event) => {
        event.preventDefault();
        const totalSumItem = props.productData.price * props.quantity;
        dispatch({
            type: ADD_ITEM,
            item: {
                ...props.productData,
                quantity: props.quantity,
                totalSumItem: totalSumItem
            }
        });
    };

    return (
        <div>
            <input className={styles.quantity}
                onChange={props.onChange}
                type={props.type} min="1" defaultValue={1}
            />
            <button className={styles.btn}
                onClick={putInCartHandler}
            >Lägg i varukorgen</button>
        </div>
    )

}

export default PutInCart;


