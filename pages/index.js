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

    // Array -> sortera -> spara den som är lägst -> ta bort -> gör om 5 gånger***

    // const array = []; 
    // for (const numberOfProducts of products){
    //   array.push(numberOfProducts.quantity)
    // }
    // console.log(array)
    // array.sort((a,b) => a-b);
    // const newArray = array.splice(0,5);
    const productArray = products;
            var filterMap = {};
            productArray.forEach(function (item) {
                if (!filterMap[item.quantity] || filterMap[item.quantity] < item.quantity) {
                  filterMap[item.quantity] = item;
                }
              })
              var result = [];
        for (var number in filterMap) {
            result.push(filterMap[number]);
          }


          result.sort(function(a) {
             return a.quantity;
          });
        
          console.log(result);       
          const newArray = result.splice(0,5);
                console.log(newArray);

      

  return (
    <div className={styles.container}>
      <img src="IMG/Start-img/start-tequila2.jpg" alt="picture of tequila" className={styles.frontPic} /> 
      <h1 className={styles.Bestsellers}>Bästsäljare</h1>
      <div className={styles.bestsellerProducts}>
      {newArray.map((product)=>(
        <div className={styles.itemCard} key={product._id}>
          <h5 className={styles.bestHeadline}>{product.name}</h5>
          <img className={styles.bestPics} src={`IMG/Products/${product.image}`}/>
          <p>{product.price}:-</p>
        </div>
      ))}
      </div>
    </div>
  )

}
