import styles from "./Products.module.css";
import products from "../../seed/products.json";
import { Product } from "./Product";

export const Products = () => {
    return (
        <ul className={styles.products__list}>
            {products.map((product) => (
                <Product key={product.slug} product={product} />
            ))}
        </ul>
    )
}