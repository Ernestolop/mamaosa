import { Nav } from "./Nav";
import styles from "./Ui.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <span className={styles.header__brand}>Mamá Osa</span>
                <Nav />
            </div>
        </header>
    )
}