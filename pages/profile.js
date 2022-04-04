import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import styles from '../styles/Profile.module.css' 
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';


const Register = ({ userID }) => {
  const dispatch = useDispatch();
  const router = useRouter()

  const [userName, setUserName] = useState ("");
  const [userPhone, setUserPhone] = useState ("");
  const [userEmail, setUserEmail] = useState ("");
  const [buyHistory, setBuyHistory] = useState ("");


  const logout = () => {
    dispatch({
      type: 'SET_LOGGED_IN',
      id: null
    })
    router.push('/')
  }

  const handleUser = (userID) => {
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userID)
    })
    .then((res) => {
      return res.json()
    })
    .then(data => {
      setUserName(data.name)
      setUserEmail(data.email)
      setUserPhone(data.phone)
      setBuyHistory(data.buyhistory)
    })
  }

  const item = []
  for( let produkt of buyHistory) {
    item.push(
      <Link href={`/Products/${produkt._id}`} key={produkt._id}>
      <div className={styles.singleProduct}>
        <h2> {produkt.name} </h2>
        <p> {produkt.country} </p>
        <img className={styles.productImage} src={`IMG/Products/${produkt.image}`}/>
        <p> {produkt.price} :- </p>
      </div>
      </Link>
    )
  }
  
  useEffect(() => {
    if (userID != null) {
      handleUser(userID) // Get all data about the user to make page dynamic
    }
  }, [])

  if(userID) {
    return ( //If user is signed in this shows
      <div className={styles.main}>
        <h1>Welcome {userName} <button onClick={logout} className={styles.btn} > Logout </button></h1>
        <div>
          User Info
            <p>Email: {userEmail} </p>
            <p>Phone: {userPhone} </p>
        </div>

        <p>Buy history:</p>
        {item}
        

      </div>
    )
    } else {
        return ( // If user isn´t singed in this shows
        <form className={styles.notLoggedInContainer}>

          <div className={styles.formInner}>
            <h2> Please Sign in or register before visiting this page </h2>

            <button className={styles.btn}>
              <Link href="/register" >
                <a> REGISTER </a>
              </Link>
            </button>

            <button className={styles.btn}>
              <Link href="/login" >
                <a> LOGIN </a>
              </Link>
            </button>

          </div>

        </form>
          )
        } 
     }

     const mapStateToProps = (state) => {
      return {
          userID: state.userID
      }
  }

     export default connect(mapStateToProps)(Register);
  