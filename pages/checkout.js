import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import {} from "../redux/actions/cartActions";


const Checkout = ({ sum, items }) => {

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
          .then((res) => res.json())
          .then((data) => {
              setUser({
                  name: data.name, 
                  phone: data.phone,
                  email: data.email
              });
          })
        }

    }, [])


    const handleChange = (e) => {
        setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}))
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(items)
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
        console.log(buyHistory);
    }


    return ( 
        <main>
            <h1>Checka ut</h1>
            <form className="form-checkout" onSubmit={handleSubmit}>
                <label htmlFor="name">Namn</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
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
                    value={user.phone}
                    onChange={handleChange}
                    required
                />    
                <label htmlFor="email">Epost</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
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
                <h2>Total sum: {sum} </h2>
                <button>Betala och slutför beställning</button>
            </form>

        </main>
     );
}

const mapStateToProps = (state) => {
    return {
        sum: state.totalSum,
        items: state.items
    }
}

 
export default connect(mapStateToProps)(Checkout);