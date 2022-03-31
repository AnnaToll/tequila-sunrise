import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/Products.module.css'

const ProductPage = () => {

    const addToCart = (e) => {
        e.preventDefault();
        console.log("Hej!")
    }

    const changeFilter = (event) => {
        if(event.target.value === "Odefinerad"){
            console.log("Tjena!")
        }
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
        .then((response) => {
         return response.json();
      })
      .then((data) => {
        setProducts(data)
      } )

    }, []) 
    return ( 
        <main className={styles.main}>
     
        <div className={styles.productDiv}>
            <h1>Vårt urval av Tequila</h1>
            <p>Vi på <i>Tech-ila</i> arbetar endast med de bästa producenterna i världen, vårt fokus ligger på fair-trade och ekologiskt odlade råvaror.</p>
            <p>Vår tequila skall helst avnjutas rumstempererad och utan tillbehör, njut t.ex. av Röda hatten en varm sommardag med några vänner och en skön minneslucka. </p>

            <div className={styles.filterProducts}>          
          <label htmlFor="productFilter">
              <select name="productFilter" onChange={changeFilter} className={styles.productFilter}>
                  <option value="Odefinerad">Välj ett filter</option>
                  <option value="Högsta till lägsta">Högsta till lägsta</option>
                  <option value="Lägsta till högsta">Lägsta till högsta</option>
              </select>
          </label>
  </div>
                 {products.map((product) => (
                      <Link 
                      href={`/Products/${product._id}`} key={product._id}>
                         <a>
                     <div key={product._id} className={styles.singleProduct}>
                     <h2>{product.name}</h2>                    
                      <img src={`IMG/Products/${product.image}`} className={styles.productImage}></img>
                     <p>Ursprungsland: {product.country}</p>
                     <p>Pris: {product.price}:-</p>
                    <button className='addToCart' onClick={addToCart}>Lägg till i varukorg</button>
                </div>
                        </a></Link>
                ))}
     </div>
 </main>
     );
}
 
export default ProductPage;