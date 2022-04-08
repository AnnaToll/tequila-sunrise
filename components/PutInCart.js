import { ADD_ITEM } from '/redux/actions/actionTypes';
import { useDispatch } from 'react-redux';
import styles from '../styles/Product.module.css';
import { useState } from 'react';


function PutInCart(props) {
    const dispatch = useDispatch();

    const [notEnoughInStock, setNotEnoughInStock] = useState(false);

    const updateStockValue = async () => {
        try {
            const response = await fetch('/api/check-quantity', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: props.productData._id,
                    changeQuantity: props.quantity
                })
            })
            const data = await response.json();
            return data;

        } catch (error) {
            console.log(error);
        }
    }

    const putInCartHandler = async (event) => {
        setNotEnoughInStock(false);
        const data = await updateStockValue();
        event.preventDefault();
        const totalSumItem = props.productData.price * props.quantity;
        if (data.inStorage === true) {
            dispatch({
                type: ADD_ITEM,
                item: {
                    ...props.productData,
                    quantity: props.quantity,
                    totalSumItem: totalSumItem,
                    inStorage: true
                }
            });
        } else {
            setNotEnoughInStock(true);
        }
    };

    if (props.productData.quantity == 0) {
        return (
            <div>
                <p className={styles.outOfStock}>Tyvärr slutsåld</p>
            </div>
        )
    } else {
        return (
            <div>
                <input className={styles.quantity}
                    onChange={props.onChange}
                    type={props.type} min="1" defaultValue={1}
                />
                <button className={styles.btn}
                    onClick={putInCartHandler}
                >Köp</button>
                {notEnoughInStock ?
                    (
                        <div className={styles.notEnoughInStock}>
                            Tyvärr inte tillräckligt många i lager.
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

export default PutInCart;


