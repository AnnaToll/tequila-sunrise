import { useEffect, useState } from 'react';
import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PutInCart from '../../components/PutInCart';


const singleProductPage = () => {
    const [productData, setProductData] = useState();
    const [quantity, setQuantity] = useState(1);
    const [internalErrorMessage, setInternalErrorMessage] = useState("");

    const router = useRouter();

    const getDataFromDB = async () => {
        const { id } = router.query;
        if (id) {
            try {
                const response = await fetch("/api/product/" + id);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error("Oj nu blev något fel från vårt håll, prova att uppdatera sidan och kvarstår problemet ber vi dig besöka oss senare igen.");
                }
                return setProductData(data);

            } catch (error) {
                console.log("Internt fel", error);
                setInternalErrorMessage(error.message);
            }
        }
    };

    useEffect(() => {
        getDataFromDB();
    }, [router]);


    if (!productData) {
        return (
            <div className={styles.internalErrorMessage}>
                {internalErrorMessage}
            </div>
        )
    } else {
        return (
            <main className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={`/img/products/${productData.image}`} objectFit="contain" layout="fill" priority="true" alt={productData.name} />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{productData.name}</h1>
                    <p className={styles.description}>{productData.description}</p>
                    <p className={styles.country}>Ursprungsland: {productData.country}</p>
                    <p className={styles.price}>Pris: {productData.price}:-</p>
                    <PutInCart
                        quantity={quantity}
                        productData={productData}
                        onChange={(e) => setQuantity(+ e.target.value)}
                        type="number"
                    />
                </div>
            </main>
        )
    };
}

export default singleProductPage;






