import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { 
    calcSumAndItems, 
    addQuantityCart, 
    removeQuantityCart, 
    customQuantityCart, 
    removeItemCart
} from "../redux/actions/cartActions";

const Cart = ({ 
    sum, 
    items, 
    itemsInCart, 
    addQuantityCart, 
    calcSumAndItems, 
    removeQuantityCart, 
    customQuantityCart,
    removeItemCart }) => {


    useEffect(() => {      
        calcSumAndItems();
    }, [items])


    const handleChange = (id, e) => {
        customQuantityCart(id, parseInt(e.target.value))
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
                            <button onClick={() => removeQuantityCart(product.id)}>-</button>
                            <input 
                                type="text" 
                                name="cart-item-quantity" 
                                id="cart-item-quantity" 
                                value={product.quantity || ''} 
                                onChange={(e) => handleChange(product.id, e)} />
                            <button onClick={() => addQuantityCart(product.id)}>+</button>
                            <button onClick={() => removeItemCart(product.id)}>Ta bort</button>
                        </div>
                        <h5>Price: {product.totalSumItem} kr</h5>
                    </div>
                </div>
            ))}
            {items.length > 0 ? <h2>Total sum: {sum} </h2> : <h2>Kundvagnen är tom</h2>}
        </main>
     );
}

const mapStateToProps = (state) => {
    return {
        sum: state.totalSum,
        itemsInCart: state.itemsInCart,
        items: state.items 
    }
}

const mapDispatchToProps = {
    calcSumAndItems: calcSumAndItems,
    addQuantityCart: addQuantityCart,
    removeQuantityCart: removeQuantityCart,
    customQuantityCart: customQuantityCart,
    removeItemCart: removeItemCart
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);