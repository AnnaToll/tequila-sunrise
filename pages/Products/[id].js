// import dbConnect from '../../lib/dbConnect';
// import Product from '../../models/Products';
// import { ObjectId } from 'mongodb';
import { useEffect, useState, useCallback } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Product.module.css'
import Image from 'next/image';
//import { ADD_ITEM } from '../../redux/actions/actionTypes';
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
    const [productData, setProductData] = useState();
    const [quantity, setQuantity] = useState(1);



    const router = useRouter();


    const getDataFromDB = useCallback(async () => {
        const { id } = router.query;
        console.log('router', router);
        if (id) {
            try {
                const response = await fetch("/api/product/" + id);
                const data = await response.json();
                console.log(data);
                return setProductData(data);

            } catch (error) {
                console.log(error);
            }
        }
    }, [router]);

    useEffect(() => {
        getDataFromDB();
    }, [getDataFromDB, router]);


    // useEffect(() => {
    //     const { id } = router.query;
    //     console.log('router', router);
    //     if (id) {
    //         fetch("/api/product/" + id)
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 setProductData(data);
    //                 console.log(data);
    //             });
    //     }
    // }, [router]);


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
                        <Image src={`/img/products/${productData.image}`} objectFit="contain" layout="fill" priority="true" alt="" />
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
                    <Link href="/Products/623c4fc4ad3085a867593526"><a>Röda hatten</a></Link>
                </div>
                <div className={styles.add}>
                </div>
            </div>
        )
    };
}

export default singleProductPage;






