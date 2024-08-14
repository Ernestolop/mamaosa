import Link from "next/link";
import styles from "./Home.module.css";

export const Main = () => {

    const baseUrl = process.env.BASE_URL;

    return (
        <main className={styles.main}>
            <div className={styles.main__container}>
                <h1 className={styles.main__h1}>Confitería Artesanal Mamá Osa - Delicias Artesanales Hechas con Amor</h1>
                <p className={styles.main__description}>Descubre las exquisiteces artesanales más irresistibles de Paraguay. ¡Haz tu pedido y disfruta hoy mismo!</p>
                <Link href={`${baseUrl}/productos`} className={styles.main__action}>
                    Ver Catálogo
                </Link>
            </div>
        </main>
    )
}