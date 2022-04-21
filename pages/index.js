import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import React from 'react';


export default function Home() {
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
  return (
    <div className={styles.container}>

      <div className={styles.frontTextContainer}>
      <p className={styles.frontText}>Den här mångsidiga humörboosten är en av de få saker du har tillgänglig varje dag utan att det kostar dig en krona. </p>
      <p className={styles.frontText}> Så varför inte utnyttja att du själv har den fantastiska makten att skapa din egna lycka? </p>
      <p className={styles.frontText}> Välkommen till Tänder, din plattform för att hitta den rätta att dela ett leende med! </p>
      </div>
      <img src="IMG/Start-img/LovingCouple.jpg" alt="picture of a couple in love" className={styles.frontPic} />
        <h1 className={styles.Bestsellers}>Populära medlemmar</h1>
          <div className={styles.bestsellerProducts}>

          <img src="IMG/Products/Lena.png"></img>

        {arrayOfMembers.map((product) => (
          <Link href="/login">
          <div className={styles.itemCard}>
                <h5 className={styles.bestHeadline}>{product.name}</h5>
              <img className={styles.bestPics} src="{`IMG/Products/{product.image}`}"/>
              <p>Ålder: {product.age} år</p>
            <p>"{product.description}"</p>
          </div>
          </Link>
          ))}
              
      </div>
    </div>
  )

}