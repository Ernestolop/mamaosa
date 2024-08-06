import styles from "./productos.module.css";
import Image from "next/image";
import { Products } from "@/components";

export default function Productos() {
    return (
        <>
            <main className={styles.products}>
                <div className={styles.products__container}>
                    <h1 className={styles.products__h1}>Productos</h1>
                    <Products />
                </div>
            </main>
        </>
    );
}