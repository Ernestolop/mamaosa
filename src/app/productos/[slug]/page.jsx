'use client';
//export const revalidate = 60 * 60 * 24 * 7; // 1 week

import Image from 'next/image';
import Link from 'next/link';
import products from "../../../seed/products.json";
import styles from './page.module.css';
import { CardCarrouselImages, ProductWhatsappBtn } from "@/components";


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
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <div className={styles.product__footer}>
                            <p className={styles.product__price}>{price}Gs</p>
                            <ProductWhatsappBtn whatsappLink={whatsappLink} />
                        </div>
                    </div>
                    <CardCarrouselImages images={images} />
                </div>
            </main>
        </>
    );
}