import { ADD_ITEM } from '/redux/actions/actionTypes';
import { useDispatch /*useSelector*/ } from 'react-redux';
import styles from '../styles/Product.module.css';
import { changeQuantityCart } from '../redux/actions/cartActions';
import { useState } from 'react';

function PutInCart(props) {
    const dispatch = useDispatch();
    // const itemInStock = useSelector(state => state.items.find(item => item._id === props.productData._id).quantity);
    // console.log('itemInStock', itemInStock);

    // const [inStock, setInStock] = useState();


    // const isItemInStock = changeQuantityCart(props.productData.id, props.quantity);
    // console.log('isItemInStock', isItemInStock);

    const [outOfStock, setOutOfStock] = useState(false);

    const updateStockValue = async () => {

        try {
            const response = await fetch('/api/check-quantity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: props.productData._id,
                    changeQuantity: props.quantity
                })
            })
            const data = await response.json();
            console.log('updateStockValue', data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const putInCartHandler = async (event) => {
        setOutOfStock(false);
        const data = await updateStockValue();
        event.preventDefault();
        const totalSumItem = props.productData.price * props.quantity;
        if (data.inStorage === true) {
            dispatch({
                type: ADD_ITEM,
                item: {
                    ...props.productData,
                    quantity: props.quantity,
                    totalSumItem: totalSumItem
                }
            });
        } else {
            console.log('varan är slut');
            setOutOfStock(true);
        }
    };

    if (props.productData.quantity == 0) {
        return (
            <div>
                <p className={styles.outOfStock}>Varan är tyvärr slutsåld</p>
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
                {outOfStock ?
                    (
                        <div>
                            Tyvärr inte tillräckligt många i lager.
                        </div>
                    ) : null
                }
            </div>
        )
    }

}

export default PutInCart;


