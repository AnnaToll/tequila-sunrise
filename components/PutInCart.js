import { ADD_ITEM } from '/redux/actions/actionTypes';
import { useDispatch /*useSelector*/ } from 'react-redux';
import styles from '../styles/Product.module.css';

function PutInCart(props) {
    const dispatch = useDispatch();
    // const itemInStock = useSelector(state => state.items.find(item => item._id === props.productData._id).quantity);
    // console.log('itemInStock', itemInStock);


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
            </div>
        )
    }

}

export default PutInCart;


