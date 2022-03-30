import { useEffect, useRef, useState } from "react";
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

    const idChecker = useRef('');
    const previousQuantity = null;
    
    useEffect(() => {      
        calcSumAndItems();
    }, [items])


    const handleChangeQuantity = async (id, currentQuantity, e) => {

        let selectedClass = e.target.getAttribute('class');
        let changeQuantity = 0;

        if (idChecker.current !== id) {
            previousQuantity = parseInt(currentQuantity);
        }
        
        if (selectedClass === 'add-quantity-cart') {
            if (!currentQuantity) 
                changeQuantity = 1;
            else {
                changeQuantity = 1;
            }
        } else if (selectedClass === 'remove-quantity-cart') {
            if (currentQuantity === 1) return;            
            changeQuantity = -1;
        } else if (selectedClass === 'custom-quantity-cart') {
            if (!e.target.value) {
                changeQuantity = 0;
            } else if (e.target.value) {
                console.log(previousQuantity);
                changeQuantity = parseInt(e.target.value) - previousQuantity;
                previousQuantity = parseInt(e.target.value);
            }
        }

        idChecker.current = id;
        changeQuantityCart(id, changeQuantity);        
    }


    return ( 
        <main>
            <h1>Shoppingcart</h1>
            {items.map(product => (
                <div key={product.id} className="cart-products">
                    <img src={product.img} />
                    <div>
                        <h4>{product.title}</h4>
                        <div>
                            <button className="remove-quantity-cart" onClick={(e) => handleChangeQuantity(product.id, product.quantity, e)}>-</button>
                            <input
                                className="custom-quantity-cart"
                                type="text" 
                                name="cart-item-quantity" 
                                id="cart-item-quantity" 
                                value={product.quantity || ''} 
                                onChange={(e) => handleChangeQuantity(product.id, product.quantity, e)} />
                            <button className="add-quantity-cart" onClick={(e) => handleChangeQuantity(product.id, product.quantity, e)}>+</button>
                            <button onClick={() => removeItemCart(product.id)}>Ta bort</button>
                        </div>
                        <h5>Price: {product.totalSumItem} kr</h5>
                    </div>
                </div>
            ))}
            {items.length > 0 ? 
                <div>
                    <h2>Total sum: {sum} </h2>  
                    <button>Checka ut</button>
                </div>
                : 
                <h2>Kundvagnen är tom</h2>}
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