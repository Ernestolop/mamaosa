import styles from "./Products.module.css";
import { Product } from "./Product";

export const Products = ({ products }) => {

    return (
        <ul className={styles.products__list}>
            {products.map((product) => (
                <Product key={product.slug} product={product} />
            ))}
        </ul>
    )
}