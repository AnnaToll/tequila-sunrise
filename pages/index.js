import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import React from 'react';


export default function Home() {

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


       
          <Link href="/login">
          <div className={styles.itemCard}>
                <h5 className={styles.bestHeadline}>Lena Handén</h5>
              <img className={styles.bestPics} src="IMG/Products/Lena.png"/>
              <p>Ålder: 36</p>
            <p>"En bra bok och en kopp té, det är en riktig fredagskväll"</p>
          </div>
          </Link>

          <Link href="/login">
              <div className={styles.itemCard}>
                <h5 className={styles.bestHeadline}>James Breden</h5>
              <img className={styles.bestPics} src="IMG/Products/James.jpg"/>
            <p>Ålder: 27</p>
            <p>"Letar efter den rätta som tuggar med stängd mun"</p>
          </div>
          </Link>

          <Link href="/login">
          <div className={styles.itemCard}>
                <h5 className={styles.bestHeadline}>Serafina Pahntbaunk</h5>
              <img className={styles.bestPics} src="IMG/Products/Serafina.png"/>
              <p>Ålder: 25</p>
            <p>"Carpe Diem"</p>
          </div>
          </Link>

          <Link href="/login">
          <div className={styles.itemCard}>
                <h5 className={styles.bestHeadline}>Jafafar Månsson</h5>
              <img className={styles.bestPics} src="IMG/Products/Jafafar.jpg"/>
              <p>Ålder: 32</p>
            <p>"Vill bara dansa"</p>
          </div>
          </Link>

          <Link href="/login">
          <div className={styles.itemCard}>
                <h5 className={styles.bestHeadline}>Alma Harth</h5>
              <img className={styles.bestPics} src="IMG/Products/Alma.png"/>
              <p>Ålder: 24</p>
            <p>"Dricker helst röda hatten på första dejten"</p>
          </div>
          </Link>

         

      </div>
    </div>
  )

}
