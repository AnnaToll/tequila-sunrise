const ProductPage = () => {

    const getAllProducts = async => {
        fetch("/api/products")
            .then((response) => {
              return response.json()
          })
          .then((data) => {
              console.log(data)
              })
      }
    
    return ( 
        <main>
        <div className="filterProducts">
            <button onClick={getAllProducts}>Tryck</button>
            <h1>Tech-ila</h1>
            <ul>
                <li>Filter 1</li>
                <li>Filter 2</li>
                <li>Filter 3</li>
                <li>Filter 4</li>
            </ul>
        </div>
        <div className="productPage">
            <h3>Product:</h3>
            <h3>Pris:</h3>
            <h3>Land:</h3>
            <h3>Procent:</h3>
            <h3>IMAGE</h3>
            
        </div>
        </main>
     );
}
 
export default ProductPage;