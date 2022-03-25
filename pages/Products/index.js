import React, { useState, useEffect } from 'react'

const ProductPage = () => {

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
            <ul>
                <li>Filter 1</li>
                <li>Filter 2</li>
                <li>Filter 3</li>
                <li>Filter 4</li>
            </ul>
        </div>
        <div>
        <h1>Alla grejer</h1>
        {products.map((product) => (
            <div key={product.id}>
                <img src={`IMG/Products/${product.image}`}></img>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.country}</p>
                <i>{product.price}</i>
            </div>
        ))}
        </div>
        </main>
     );
}
 
export default ProductPage;