export const revalidate = 604800;

import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { ProductWhatsappBtn, CopyPageBtn, ThumbsGallery } from "@/components";
import ProductNotFound from "@/server/modules/product/errors/ProductNotFound";
import { getProductBySlug } from "@/server/modules/product/actions/productActions";

export async function generateMetadata({ params }) {
    const { slug } = params;
    const product = await getProduct(slug);
    const { name, price } = product;
    return {
        title: `${name}`,
        description: `${name} de Confitería Mamá Osa en Paraguay. Pide ya tu ${name} por solo ${price}Gs.`
    };
}


export async function generateStaticParams() {
    return [];
}

export default async function Producto({ params }) {

    const { slug } = params;

    const product = await getProduct(slug);

    const { price, name, text, images } = product;
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
                        <p>{text}</p>
                    </div>
                    <ThumbsGallery images={images} />
                </div>
            </main>
        </>
    );
}

const getProduct = async (slug) => {
    try {
        return await getProductBySlug(slug);
    } catch (error) {
        if (error instanceof ProductNotFound) {
            notFound();
        }
        throw error;
    }
}