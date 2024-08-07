import Link from "next/link";
import styles from "./Products.module.css";

export const ProductWhatsappBtn = ({ whatsappLink }) => {
    return (
        <button>
            <Link className={styles.product__action} href={whatsappLink}>
                Pedir
            </Link>
        </button>
    )
}