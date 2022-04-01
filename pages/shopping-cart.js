import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import LoginComponent from "../components/LoginComponent";
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

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const userID = localStorage.getItem("userID")
        if (userID != null) {
          setLoggedIn(true);
        }
    })
    
    useEffect(() => {      
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
            {!loggedIn && <LoginComponent pathName='/shopping-cart' />}
            {loggedIn && <>
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
                                    type="text" 
                                    name="cart-item-quantity" 
                                    id="cart-item-quantity" 
                                    value={product.quantity || ''} 
                                    onChange={(e) => handleChangeQuantity(product._id, product.quantity, e)} 
                                    disabled
                                />
                                <button className="add-quantity-cart" onClick={(e) => handleChangeQuantity(product._id, product.quantity, e)}>+</button>
                                <button onClick={() => removeItemCart(product._id)}>Ta bort</button>
                            </div>
                            <h5>Price: {product.totalSumItem} kr</h5>
                        </div>
                    </div>
                ))}
                {items.length > 0 ? 
                    <div>
                        <h2>Total sum: {sum} </h2>
                        <Link href="/checkout">
                            <a>
                                <button>Checka ut</button>
                            </a>
                        </Link> 
                    </div>
                    : 
                    <h2>Kundvagnen är tom</h2>
                }
            </>}
        </main>
     );
}

const mapStateToProps = (state) => {
    return {
        sum: state.totalSum,
        items: state.items 
    }
}

const mapDispatchToProps = {
    calcSumAndItems: calcSumAndItems,
    removeItemCart: removeItemCart,
    changeQuantityCart: changeQuantityCart
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);