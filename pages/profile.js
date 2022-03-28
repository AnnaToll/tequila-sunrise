import React from 'react'


export default function Register() {
    

    if (true) {
      return ( //If user is signed in this shows
          <div className="welcome">
            <h1>Welcome User</h1>
            <button> {/* <Link to="/">Sign Out</Link> */} </button>
          </div>
      );
    } else {
  
      return ( // If user isn´t singed in this shows
      <div className='welcome'>
      <h2> Please Sign in or register before visiting this page </h2>
      <button>{/* <Link to="/">Sign in</Link></button>  <button> <Link to="/about" >Register</Link>  */}</button> 
      </div>
      )
    }
  }
  