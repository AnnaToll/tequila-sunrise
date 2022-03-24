import { useEffect, useState } from "react";

const Cart = () => {

    const [isCartEmpty, setIsCartEmpty] = useState(false);
    const [totalSum, setTotalSum] = useState({sum: 0});

    const [cart, setCart] = useState([
        {
            id: 1,
            title: "tequila 1",
            img: "/dmitry-dreyer-7hHRTw_-1SY-unsplash.jpg",
            price: 299,
            quantity: 1
        },
        {
            id: 2,
            title: "Tequila 2",
            img: "/fidel-fernando-tfLBYGwDews-unsplash.jpg",
            price: 249,
            quantity: 2
        }
    ]);

    useEffect(() => {

        setTotalSum({sum: 0});

        let sum = totalSum.sum;

        cart.map((product) => {
            let productSum = product.price * product.quantity;
            console.log(productSum);
            sum += productSum;
        }) 
        setTotalSum({sum: sum});
        console.log(sum);
    }, [cart])


    return ( 
        <main>
            <h1>Shoppingcart</h1>
            {cart.map(product => (
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
            {!isCartEmpty && <h2>Total sum: {totalSum.sum} </h2>}
        </main>
     );
}
 
export default Cart;