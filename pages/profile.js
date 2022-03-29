import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Register() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter()
  
  useEffect(() => {
   const coockie = localStorage.getItem('isLoggedIn');
   console.log(coockie)
   if (coockie)
     setLoggedIn(true);
 }, [])

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    setLoggedIn(false);
    router.push('/')
  }

  if(loggedIn) {
    return ( //If user is signed in this shows
      <div className="welcome">
        <h1>Welcome User</h1>
        <button onClick={logout}> Logout </button>
      </div>
    )
    } else {
        return ( // If user isn´t singed in this shows
          <div className='welcome'>
            <h2> Please Sign in or register before visiting this page </h2>
            <button></button> 
          </div>
          )
        } 
     }
  