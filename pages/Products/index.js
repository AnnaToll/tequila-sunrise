import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from '../../styles/Products.module.css'
import PutInCart from '../../components/PutInCart';


const ProductPage = () => {

    const arrayOfMembers = [
        {
        name: "Lena Handén",
        image: "IMG/Products/Lena.png",
        age: "36",
        description: "En bra bok och en kopp té, det är en riktig fredagskväll"
    },
    {
        name: "James Breden",
        image: "IMG/Products/James.jpg",
        age: "27",
        description: "Letar efter den rätta som tuggar med stängd mun"
    },
    {
        name: "Serafina Pahntbaunk",
        image: "IMG/Products/Serafina.png",
        age: "25",
        description: "Carpe Diem"
    },
    {
        name: "Jafafar Månsson",
        image: "IMG/Products/Jafafar.jpg",
        age: "32",
        description: "Vill bara dansa"
    },
    {
        name: "Alma Harth",
        image: "IMG/Products/Alma.png",
        age: "24",
        description: "Dricker helst röda hatten på första dejten"
    }
]
    
const [swipe, setSwipe] = useState({0})


const swipeFunction = () => {
    setSwipe= +1;
}


    return (
        <main className={styles.main}>

            <div className={styles.productDiv}>
                <h1>Swipea med ett leende</h1>

                    <div className={styles.swipe}>
                    
                    

                        <button className={styles.swipeButtonYes} onClick={swipeFunction}>✓</button>

                      {arrayOfMembers.map((members) => (
                    <div className={styles.singleProduct}>

                       
                                <h2>{members.name}</h2>
                                <img src={members.image} className={styles.productImage}></img>
                                <p>Ålder: {members.age} år</p>
                                <p> {members.description}</p>
                    </div>
                    
                    ))[swipe]}

                    <button className={styles.swipeButtonNo}> ✘ </button>
            
            </div>
            </div>
        </main>
    );
}

export default ProductPage;