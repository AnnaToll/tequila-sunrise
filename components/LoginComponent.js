import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import { useDispatch } from 'react-redux';
import styles from '../styles/Login.module.css' 

const LoginComponent = ({ pathName }) => {

  const dispatch = useDispatch();
  const [details, setDetails] = useState({ email: "", password: ""})
  const [error, setError] = useState("")
  const router = useRouter()
  
  useEffect(() => {
   router.prefetch(pathName) // Prefetch the profile page
 }, [])
   
  const handleLogin = async (e) => {
    e.preventDefault();
  
    const user = {
      email: details.email,
      password: details.password
    }

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then((data) => {
      if (data.loggedIn) {
        const userData = data.userData
        dispatch({
          type: 'SET_LOGGED_IN',
          id: userData // setting userID as id for later us and as validation for profile-Page
      })
        router.push({
          pathname: pathName //redirecting to profile page if details match
        });
      } else {
        setError(data.message)
      }
    })
  }

    return ( 
      <form onSubmit={handleLogin} className={styles.container}>
        <div className={styles.formInner}>
          <h2>Logga in</h2>
          <p> {error} </p> {/* message for the user if details does not match */}

          <div className={styles.formGroup}>
            <label htmlFor='email'>Epost:</label>
            <input type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='password'>Lössenord:</label>
            <input type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
          </div>
            
          <input type="submit" value="LOGGA IN" className={styles.btn}/>
          <button className={styles.btn}>
           <Link href="/register" >
               <a> REGISTRERA </a>
           </Link>
           </button>
        </div>
      </form>
    )
  }   
export default LoginComponent;