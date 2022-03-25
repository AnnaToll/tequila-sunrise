import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { calcSumAndItems, addQuantityCart } from "../redux/actions/cartActions";

const Cart = ({ sum, items, addQuantityCart, calcSumAndItems }) => {

    const [isCartEmpty, setIsCartEmpty] = useState(false);

    useEffect(() => {      
        calcSumAndItems();
    }, [])


    return ( 
        <main>
            <h1>Shoppingcart</h1>
            {items.map(product => (
                <div key={product.id} className="cart-products">
                    <img src={product.img} />
                    <div>
                        <h4>{product.title}</h4>
                        <div>
                            <button>-</button>
                            <input type="text" name="cart-item-quantity" id="cart-item-quantity" value={product.quantity} />
                            <button>+</button>
                        </div>
                        <h5>Price: {product.quantity * product.price} kr</h5>
                    </div>
                </div>
            ))}
            {!isCartEmpty && <h2>Total sum: {sum} </h2>}
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
    addQuantityCart: addQuantityCart
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);