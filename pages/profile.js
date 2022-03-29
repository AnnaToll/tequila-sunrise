import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Register() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter()
  const userId = router.query.user

  
  useEffect(() => {
      const coockie = localStorage.getItem('isLoggedIn');
      if (coockie)
      setLoggedIn(true);
      handleUser
    }, [])
    
  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    setLoggedIn(false);
    router.push('/')
  }

  const handleUser = () => {
    fetch('/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      })
      /* .then(res => res.json())
      .then((data) => {
       
          
        }) */
  }

  if(loggedIn) {
    return ( //If user is signed in this shows
      <div className="welcome">
        <h1>Welcome User</h1>
        <button onClick={logout}> Logout </button>

        <div>  buyhistory </div>

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
  