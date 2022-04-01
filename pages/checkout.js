import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from 'next/router';
import { clearCartPurchase } from "../redux/actions/cartActions";
import LoginComponent from "../components/LoginComponent";


const Checkout = ({ sum, items, clearCartPurchase }) => {

    const router = useRouter();

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({})


    useEffect(() => {

        const userId = localStorage.getItem("userID")
        if (userId != null) {
          setLoggedIn(true);

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

    }, [])


    const handleChange = (e) => {
        setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}))
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        let buyHistory = [];
        for (let item of items) {
            let purchaseObject = {
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
            {!loggedIn && <LoginComponent pathName='/checkout' />}
            {loggedIn && <>
                <h1>Checka ut</h1>
                <form className="form-checkout" onSubmit={handleSubmit}>
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
                    <h3>Betalningsmetod</h3> 
                    <label htmlFor="cash">Kontant</label>
                    <input 
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
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
                    <h2>Att betala: {sum} kr</h2>
                    <button>Betala och slutför beställning</button>
                </form>
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
    clearCartPurchase: clearCartPurchase
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);