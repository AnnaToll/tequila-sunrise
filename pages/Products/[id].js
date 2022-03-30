// import dbConnect from '../../lib/dbConnect';
// import Product from '../../models/Products';
// import { ObjectId } from 'mongodb';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Product.module.css'
import Image from 'next/image';
import { ADD_ITEM } from '../../redux/actions/actionTypes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PutInCart from '../../components/PutInCart';

// export const getServerSideProps = async (context) => { //sättet jag fetchade på från början

//     await dbConnect();

//     let productData = await Product.findOne({ _id: new ObjectId(context.params.id) });
//     productData = JSON.parse(JSON.stringify(productData));

//     console.log(productData);
//     return {
//         props: { productData },
//     };
// };

const singleProductPage = (/*{ productData }*/) => {
    const [productData, setProductData] = useState(); //tillhör useEffect-fetch
    // const price = productData.price;
    // const [price, setPrice] = useState(productData.price);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const cart = useSelector(state => state.products.items); //bara ett test för att se att information skickas vidare. Ska tas bort
    console.log('cart', cart);


    const router = useRouter();

    //början på att hämta data via api-fil så att det blir enhetligt med hur de andra gör
    //  async function getDataFromBackend() {
    //      try {
    //          const { id } = router.query;
    //          console.log('router', router);
    //              const response = await fetch("/api/product/" + id);
    //                  .then((response) => {
    //                      return response.json();
    //                  })
    //                  .then((data) => {
    //                      setProductData(data);
    //                      console.log(data);
    //                  });
    //          } 
    //          catch(error) {

    //         }
    //      } 
    //     }


    useEffect(() => { //början på att hämta data via api-fil så att det blir enhetligt med hur de andra gör
        const { id } = router.query;
        console.log('router', router);
        if (id) {
            fetch("/api/product/" + id)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setProductData(data);
                    console.log(data);
                });
        }
    }, [router]);


    // const putInCartHandler = async (event) => {
    //     event.preventDefault();
    //     const totalSumItem = productData.price * quantity;
    //     dispatch({
    //         type: ADD_ITEM,
    //         item: {
    //             ...productData,
    //             quantity: quantity,
    //             totalSumItem: totalSumItem
    //         }
    //     });
    // };

    if (!productData) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={`/img/products/${productData.image}`} objectFit="contain" layout="fill" alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{productData.name}</h1>
                    <p className={styles.description}>{productData.description}</p>
                    <p className={styles.price}>{productData.price}:-</p>
                    <p>Ursprungsland: {productData.country}</p>
                    <PutInCart
                        quantity={quantity}
                        productData={productData}
                        onChange={(e) => setQuantity(+ e.target.value)}
                        type="number"
                    />
                    {/* <input onChange={(e) => setQuantity(+ e.target.value)} type="number" min="1" defaultValue={1} className={styles.quantity} />
                    <button onClick={putInCartHandler} className={styles.btn}>Lägg i varukorgen</button> */}
                    <Link href="/Products/623c4fc4ad3085a867593526"><a>Röda hatten</a></Link>
                </div>
                <div className={styles.add}>
                    {cart.map(product => (
                        <div key={product._id}>{product.name} {product.quantity}</div>
                    ))}
                </div>
            </div>
        )
    };
}

export default singleProductPage;






