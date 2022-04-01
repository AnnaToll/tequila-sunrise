import { useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import {
    calcSumAndItems,
    removeItemCart,
    changeQuantityCart
} from "../redux/actions/cartActions";

const Cart = ({
    sum,
    items,
    calcSumAndItems,
    removeItemCart,
    changeQuantityCart }) => {
<<<<<<< HEAD
    
    useEffect(() => {      
=======

    const idChecker = useRef('');
    const previousQuantity = useRef(null);

    useEffect(() => {
>>>>>>> main
        calcSumAndItems();
    }, [items])


    const handleChangeQuantity = async (id, currentQuantity, e) => {

        let selectedClass = e.target.getAttribute('class');
        let changeQuantity = 0;
        
        if (selectedClass === 'add-quantity-cart') {
            changeQuantity = 1;
        } else if (selectedClass === 'remove-quantity-cart') {
            if (currentQuantity === 1) return;
            changeQuantity = -1;
        } 

        changeQuantityCart(id, changeQuantity);        
    }


    return (
        <main>
            <h1>Shoppingcart</h1>
            {items.map(product => (
                <div key={product._id} className="cart-products">
                    <img src={`/img/products/${product.image}`} />
                    <div>
                        <h4>{product.name}</h4>
                        <div>
                            <button className="remove-quantity-cart" onClick={(e) => handleChangeQuantity(product._id, product.quantity, e)}>-</button>
                            <input
                                className="custom-quantity-cart"
<<<<<<< HEAD
                                type="text" 
                                name="cart-item-quantity" 
                                id="cart-item-quantity" 
                                value={product.quantity || ''} 
                                onChange={(e) => handleChangeQuantity(product._id, product.quantity, e)} 
                                disabled
                            />
                            <button className="add-quantity-cart" onClick={(e) => handleChangeQuantity(product._id, product.quantity, e)}>+</button>
                            <button onClick={() => removeItemCart(product._id, product.quantity)}>Ta bort</button>
=======
                                type="text"
                                name="cart-item-quantity"
                                id="cart-item-quantity"
                                value={product.quantity || ''}
                                data-prev-value=""
                                onChange={(e) => handleChangeQuantity(product.id, product.quantity, e)} />
                            <button className="add-quantity-cart" onClick={(e) => handleChangeQuantity(product.id, product.quantity, e)}>+</button>
                            <button onClick={() => removeItemCart(product.id)}>Ta bort</button>
>>>>>>> main
                        </div>
                        <h5>Price: {product.totalSumItem} kr</h5>
                    </div>
                </div>
            ))}
            {items.length > 0 ?
                <div>
                    <h2>Total sum: {sum} </h2>
<<<<<<< HEAD
                    <Link href="/checkout">
                        <a>
                            <button>Checka ut</button>
                        </a>
                    </Link> 
                </div>
                : 
                <h2>Kundvagnen är tom</h2>
            }
=======
                    <button>Checka ut</button>
                </div>
                :
                <h2>Kundvagnen är tom</h2>}
>>>>>>> main
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        sum: state.totalSum,
<<<<<<< HEAD
        items: state.items 
=======
        items: state.items
>>>>>>> main
    }
}

const mapDispatchToProps = {
    calcSumAndItems: calcSumAndItems,
    removeItemCart: removeItemCart,
    changeQuantityCart: changeQuantityCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);