import React, { useState, useEffect } from 'react'

const ProductPage = () => {

    const addToCart = () => {
        console.log("Hej!")
    }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
        .then((response) => {
         return response.json();
      })
      .then((data) => {
        setProducts(data)
        console.log(data)
      } )

    }, []) 
    return ( 
        <main>
        <div className="filterProducts">
          
            <h1>Tech-ila</h1>
            <label for="productFilter" >
                <select name="productFilter" className="productFilter">
                    <option value="Högsta till lägsta">Högsta till lägsta</option>
                    <option value="Lägsta till högsta">Lägsta till högsta</option>
                </select>
            </label>
        </div>
        <div>
        <h1>Alla grejer</h1>
        {products.map((product) => (
            <div key={product.id}>
                <img src={`IMG/Products/${product.image}`}></img>
                <p>Namn: {product.name}</p>
                <p>Beskrivning: {product.description}</p>
                <p>Land: {product.country}</p>
                <i>Pris: {product.price}</i>
                <button className='addToCart' onClick={addToCart}>Lägg till i varukorg</button>
            </div>
        ))}
        </div>
        </main>
     );
}
 
export default ProductPage;