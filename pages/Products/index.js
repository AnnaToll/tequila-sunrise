import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from '../../styles/Products.module.css'
import PutInCart from '../../components/PutInCart';


const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const changeFilter = (filters) => {
        console.log(filters)
        const differentFilters = {
            highest: 'price',
            lowest: 'price'
        };

        if (filters == "highest") {
            const sortFilter = differentFilters[filters];
            const sorted = [...products].sort((a, b) => b[sortFilter] - a[sortFilter])
            setProducts(sorted)
        } if (filters == "lowest") {
            const sortFilter = differentFilters[filters];
            const sorted = [...products].sort((a, b) => a[sortFilter] - b[sortFilter])
            setProducts(sorted)
        }
    }


    useEffect(() => {
        fetch("/api/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data)
            })

    }, [])
    return (
        <main className={styles.main}>

            <div className={styles.productDiv}>
                <h1>Vårt urval av Tequila</h1>
                <p>Vi på <i>Tech-ila</i> arbetar endast med de bästa producenterna i världen, vårt fokus ligger på fair-trade och ekologiskt odlade råvaror.</p>
                <p>Vår tequila skall helst avnjutas rumstempererad och utan tillbehör, njut t.ex. av Röda hatten en varm sommardag med några vänner och en skön minneslucka. </p>

                <div className={styles.filterProducts}>
                    <label htmlFor="productFilter" className={styles.labelFilter}>
                        <select name="productFilter" defaultValue="Odefinerad" onChange={(e) => changeFilter(e.target.value)} className={styles.productFilter}>
                            <option value="Odefinerad">Välj ett filter</option>
                            <option value="highest">Högsta till lägsta</option>
                            <option value="lowest">Lägsta till högsta</option>
                        </select>
                    </label>
                </div>
                {products.map((product) => (

                    <div key={product._id} className={styles.singleProduct}>
                        <Link
                            href={`/Products/${product._id}`} key={product._id}>
                            <a>
                                <h2>{product.name}</h2>

                                <img src={`IMG/Products/${product.image}`} className={styles.productImage}></img>

                                <p>Ursprungsland: {product.country}</p>
                                <p>Pris: {product.price}:-</p>
                            </a></Link>

                        <PutInCart
                            quantity={quantity}
                            productData={product}
                            onChange={(e) => setQuantity(+ e.target.value)}
                            type="number" />

                    </div>

                ))}
            </div>
        </main>
    );
}

export default ProductPage;