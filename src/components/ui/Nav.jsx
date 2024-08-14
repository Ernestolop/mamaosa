import Link from 'next/link'
import styles from "./Ui.module.css";


export const Nav = () => {

    const baseUrl = process.env.BASE_URL;

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__ul}>
                <li className={styles.nav__li}>
                    <Link className={styles.nav__a} href={`${baseUrl}`}>Inicio</Link>
                </li>
                <li className={styles.nav__li}>
                    <Link className={styles.nav__a} href={`${baseUrl}/productos`}>Productos</Link>
                </li>
            </ul>
        </nav>
    )
}