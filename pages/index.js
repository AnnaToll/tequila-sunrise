// Skriv här
import Head from 'next/head'
import Link from 'next/link'
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
      <Link 
        href='/Products/6241e404c49a3352fa93205d'>
           <a>
      <img src="IMG/Start-img/start-tequila2.jpg" alt="picture of tequila" className={styles.frontPic} /> 
      <h2 className={styles.frontHeadline}>Espolon</h2>
      <div className={styles.frontTextContainer}>
      <p className={styles.frontText}>Espolon Tequila Blanco är en tequila som produceras vid Destiladora San Nicola i de berömda kullarna i Los Altos i Jalisco, där de blå agaveplantorna växer frodig som ingen annanstans. Agavas hjärta, piñas, tillagas långsamt i en autoklav och krossas sedan för att extrahera sockerarterna och lämnas till jäsning för att låta dem förvandlas till alkohol.</p>
      </div>
      <img src="IMG/Start-img/orange2.jpg" alt="picture of oranges" className={styles.frontPic} />
      </a></Link>
        <h1 className={styles.Bestsellers}>Bästsäljare</h1>
          <div className={styles.bestsellerProducts}>
    {newArray.map((product)=>(
        <Link 
        href={`/Products/${product._id}`} key={product._id}>
           <a>
              <div className={styles.itemCard} key={product._id}>
                <h5 className={styles.bestHeadline}>{product.name}</h5>
              <img className={styles.bestPics} src={`IMG/Products/${product.image}`}/>
            <p>{product.price}:-</p>
          </div>
        </a></Link>
      ))}
      </div>
    </div>
  )

}
