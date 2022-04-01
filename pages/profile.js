import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Register() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [userName, setUserName] = useState ("");
  const [userPhone, setUserPhone] = useState ("");
  const [userEmail, setUserEmail] = useState ("");
  const [buyHistory, setBuyHistory] = useState ("");

  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('userID')
    setLoggedIn(false);
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
      console.log(data)
      setUserName(data.name)
      setUserEmail(data.email)
      setUserPhone(data.phone)
      setBuyHistory(data.buyhistory)
    })
  }

  useEffect(() => {
    const userID = localStorage.getItem("userID")
    if (userID != null) {
      setLoggedIn(true);
      handleUser(userID) // Get all data about the user to make page dynamic
    }
  }, [])

  if(loggedIn) {
    return ( //If user is signed in this shows
      <div className="welcome">
        <h1>Welcome {userName}</h1>

        <div>
          User Info
            <p>Email: {userEmail} </p>
            <p>Phone: {userPhone} </p>
        </div>

        {/* { for(let historydata of buyHistory) {
          
        } } */}

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
  