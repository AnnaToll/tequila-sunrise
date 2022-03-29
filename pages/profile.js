import { route } from 'next/dist/server/router';
import React, { useEffect } from 'react'


export default function Register() {

    const removeLocalStorage = () => {
       localStorage.removeItem('myCat');
    }

    useEffect(() => {
        // Perform localStorage action
        var item = localStorage.getItem('myCat')
      }, [])

      if("myCat" in localStorage) {
        return ( //If user is signed in this shows
        <div className="welcome">
          <h1>Welcome User</h1>
          <button onClick={removeLocalStorage}> {/* <Link to="/">Sign Out</Link> */} </button>
        </div>
        )
    } else {
        return ( // If user isn´t singed in this shows
        <div className='welcome'>
          <h2> Please Sign in or register before visiting this page </h2>
          <button>{/* <Link to="/">Sign in</Link></button>  <button> <Link to="/about" >Register</Link>  */}</button> 
          </div>
        )
    }


   
}
  