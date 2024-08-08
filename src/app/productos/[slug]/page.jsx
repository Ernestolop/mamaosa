export const revalidate = 60 * 60 * 24 * 7; // 1 week

import products from "../../../seed/products.json";
import styles from './page.module.css';
import { ProductWhatsappBtn, CopyPageBtn, ThumbsGallery } from "@/components";


export default function Producto({ params }) {

    const { slug } = params;

    const product = products[0];
    const { price, name, description, images } = product;
    const whatsappLink = `https://wa.me/+595971580942?text=Hola, quisiera realizar un pedido de ${name}.`;

    return (
        <>
            <main className={styles.product}>
                <div className={styles.product__container}>
                    <div className={styles.product__text}>
                        <div className={styles.product__header}>
                            <div className={styles.product__main}>
                                <h1>{name}</h1>
                                <p className={styles.product__price}>{price}Gs</p>
                            </div>
                            <div className={styles.product__actions}>
                                <CopyPageBtn />
                                <ProductWhatsappBtn whatsappLink={whatsappLink} />
                            </div>
                        </div>
                        <p>{description}</p>
                    </div>
                    <ThumbsGallery images={images} />
                </div>
            </main>
        </>
    );
}