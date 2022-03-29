// Skriv här
import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import React from 'react';


export default function Home() {

  const [products, setProducts] = useState([]);   

    useEffect(() => {
      fetch('/api/frontpage')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
    }, [])

    const array = []; 
    for (let i = 0; i <= products.length; i++){
      array.push(products)
    }
    for (const numberOfProducts of products){
      console.log(numberOfProducts)
      console.log(numberOfProducts.quantity)
    }
    
  

  return (
    <div className={styles.container}>
      <h1>Tech-ila</h1>
      <img src="IMG/Start-img/start-tequila2.jpg" alt="picture of tequila" className={styles.frontPic} /> 
      <h1 className={styles.Bestsellers}>Bästsäljare</h1>
    </div>
  )

}
