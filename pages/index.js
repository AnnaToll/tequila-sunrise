// Skriv här
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import React from 'react';


export default function Home() {

  //   fetch('/api/frontpage', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email: email })
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // }

  return (
    <div className={styles.container}>
      <h1>Tech-ila</h1>
      <img src="IMG/Start-img/start-tequila2.jpg" alt="picture of tequila" className={styles.frontPic} /> 
      <h1 className={styles.Bestsellers}>Bästsäljare</h1>
    </div>
  )

}
