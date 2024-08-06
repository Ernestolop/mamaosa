import Image from "next/image";
import Link from "next/link";
import styles from "./Products.module.css";

export const Product = ({ product }) => {

    const { name, description, price, images } = product;
    const image = images[0];
    const whatsappLink = `https://wa.me/+595971580942?text=Hola, quisiera realizar un pedido de ${name}.`;

    return (
        <li className={styles.products__item}>
            <article className={styles.product}>
                <Image className={styles.product__image} src={image.url} alt={image.alt} width={400} height={400} />
                <h3 className={styles.product__title}>{name}</h3>
                <p className={styles.product__description}>{description}</p>
                <footer className={styles.product__footer}>
                    <p className={styles.product__price}>{price}Gs</p>
                    <button>
                        <Link className={styles.product__action} href={whatsappLink}>
                            Pedir
                        </Link>
                    </button>
                </footer>
            </article>
        </li>
    )
}