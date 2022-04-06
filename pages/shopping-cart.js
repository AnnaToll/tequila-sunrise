import { useEffect, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { calcSumAndItems, removeItemCart, changeQuantityCart } from "../redux/actions/cartActions";
import styles from '../styles/Cart.module.css'


const Cart = ({
    sum,
    items,
    calcSumAndItems,
    removeItemCart,
    changeQuantityCart }) => {
    
    useEffect(() => {      
        calcSumAndItems();
    }, [items])


    const handleChangeQuantity = async (id, currentQuantity, e) => {

        let selectedClass = e.target.getAttribute('class');
        let changeQuantity = 0;
        
        if (selectedClass === 'add-quantity-cart') {
            if (currentQuantity >= 10 || e.target.previousElementSibling.value >= 10) 
                return;
            changeQuantity = 1;
        } else if (selectedClass === 'remove-quantity-cart') {
            if (currentQuantity === 1 || e.target.nextElementSibling.value === 1) 
                return;
            changeQuantity = -1;
        } 

        changeQuantityCart(id, changeQuantity);        
    }


    return (
        <main >
            <h1 className="cart-headline">Kundvagn</h1>
            <div className="cart-container">
                {items.map(product => (
                    <div key={product._id} className={styles.products}>
                        <img src={`/img/products/${product.image}`} />
                        <div>
                            <Link href={`/Products/${product._id}`}>
                                <a>
                                    <h4>{product.name}</h4>
                                </a>
                            </Link>
                            <div className={styles.changeQuantityContainer}>
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
                                <button className={`${styles.deletItemBtn} button-small`} onClick={() => removeItemCart(product._id, product.quantity)}>Ta bort</button>
                            </div>
                            {product.quantity >= 10 ? 
                                <p>Maxköp per produkt uppnådd. Vänligen kontankta oss för att köpa mer.</p> 
                                : ''}
                            {product.inStorage ? 
                                '' 
                                : <p>Kan inte lägga {product.quantity + 1} st av denna vara, lagersaldot är för lågt.</p>}
                            <h5>Summa: {product.totalSumItem} kr</h5>
                        </div>
                    </div>
                ))}
                {items.length > 0 ?
                    <div>
                        <hr />
                        <h2>Totalsumma: {sum} kr </h2>
                        <Link href="/checkout">
                            <a>
                                <button>Checka ut</button>
                            </a>
                        </Link> 
                    </div>
                    : 
                    <h2>Kundvagnen är tom</h2>
                }
            </div>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        sum: state.cart.totalSum,
        items: state.cart.items 
    }
}

const mapDispatchToProps = {
    calcSumAndItems: calcSumAndItems,
    removeItemCart: removeItemCart,
    changeQuantityCart: changeQuantityCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);