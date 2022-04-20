import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from '../../styles/Products.module.css'
import PutInCart from '../../components/PutInCart';


const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

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

                {arrayOfMembers.map((product) => (

                    <div className={styles.singleProduct}>
                       
                                <h2>{product.name}</h2>
                                <img src={product.image} className={styles.productImage}></img>
                                <p>Ålder: {product.age} år</p>
                                <p> {product.description}</p>
                    </div>

                ))}
            </div>
        </main>
    );
}

export default ProductPage;