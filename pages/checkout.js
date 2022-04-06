import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from 'next/router';
import { clearCartPurchase } from "../redux/actions/cartActions";
import LoginComponent from "../components/LoginComponent";
import styles from '../styles/Checkout.module.css';


const Checkout = ({ sum, items, clearCartPurchase, userId }) => {

    const router = useRouter();
    const [user, setUser] = useState({});
    const [errorZipCode, setErrorZip] = useState('');

    useEffect(() => {

        if (userId) {
          fetch('/api/user', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(userId)
          })
          .then(res => res.json())
          .then(data => {
              setUser({
                  name: data.name, 
                  phone: data.phone,
                  email: data.email,
                  id: userId
              });
          })
        }

    }, [userId])


    const handleChange = (e) => {
        setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}));
    } 


    const handleSubmit = (e) => {
        e.preventDefault();
        let buyHistory = [];
        for (let item of items) {
            let purchaseObject = {
                _id: item._id,
                name: item.name,
                price: item.totalSumItem,
                description: item.description,
                quantity: item.quantity,
                image: item.image,
                country: item.country
            }
            buyHistory.push(purchaseObject);
        }
        
        fetch('/api/user', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: user.id,
                purchases: buyHistory
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                clearCartPurchase();
                router.push({
                    pathname: '/success'
                });
            }
        })
    }


    return ( 
        <main>
            {!userId && <LoginComponent pathName='/checkout' />}
            {userId && <>
                <h1 className="cart-headline">Checka ut</h1>
                <div className="cart-container">
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div>
                            <div className={styles.details}>
                                <h2>Personuppgifter</h2>
                                <label htmlFor="name">Namn</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                    value={user.name || ''}
                                    required
                                />    
                                <label htmlFor="adress">Adress</label>
                                <input 
                                    type="text"
                                    id="adress"
                                    name="adress"
                                    required
                                />    
                                <label htmlFor="zip-code">Postnummer</label>
                                <input 
                                    type="number"
                                    id="zip-code"
                                    name="zip-code"
                                    required
                                />    
                                <label htmlFor="city">Postort</label>
                                <input 
                                    type="text"
                                    id="city"
                                    name="city"
                                    required
                                />       
                                <label htmlFor="phone">Telefonnummer</label>
                                <input 
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    onChange={handleChange}
                                    value={user.phone || ''}
                                    required
                                />    
                                <label htmlFor="email">Epost</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={user.email || ''}
                                    required
                                />
                            </div>
                            <hr />
                            <div className={styles.payment}>
                                <div>
                                    <h2>Betalning</h2>
                                    <h3>Betalningsmetod</h3> 
                                    <div>
                                        <label htmlFor="klarna">Klarna</label>
                                        <input 
                                            type="radio"
                                            id="klarna"
                                            name="payment"
                                            value="klarna"
                                            required
                                        />
                                        <label htmlFor="card">Kort</label>
                                        <input 
                                            type="radio"
                                            id="card"
                                            name="payment"
                                            value="card"
                                            required
                                        />
                                    </div>
                                </div>
                                <h2>Att betala: {sum} kr</h2>
                            </div>
                        </div>
                        <hr />
                        <button>Betala och slutför beställning</button>
                    </form>
                </div>
            </>}

        </main>
     );
}

const mapStateToProps = (state) => {
    return {
        sum: state.cart.totalSum,
        items: state.cart.items,
        userId: state.user.userID
    }
}

const mapDispatchToProps = {
    clearCartPurchase: clearCartPurchase
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);