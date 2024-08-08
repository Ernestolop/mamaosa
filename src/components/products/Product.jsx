import styles from "./Products.module.css";
import { CardCarrouselImages, ProductWhatsappBtn, ProductViewBtn } from "@/components";

export const Product = ({ product }) => {

    const { name, description, price, images, slug } = product;
    const whatsappLink = `https://wa.me/+595971580942?text=Hola, quisiera realizar un pedido de ${name}.`;

    return (
        <li className={styles.products__item}>
            <article className={styles.product}>
                <CardCarrouselImages images={images} />
                <h3 className={styles.product__title}>{name}</h3>
                <p className={styles.product__description}>{description}</p>
                <footer className={styles.product__footer}>
                    <p className={styles.product__price}>{price}Gs</p>
                    <div className={styles.product__actions}>
                        <ProductViewBtn slug={slug} />
                        <ProductWhatsappBtn whatsappLink={whatsappLink} />
                    </div>
                </footer>
            </article>
        </li>
    )
}