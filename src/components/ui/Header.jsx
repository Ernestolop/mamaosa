
import Image from "next/image";
import { Nav } from "./Nav";
import styles from "./Ui.module.css";

export const Header = () => {

    const baseUrl = process.env.BASE_URL;

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Image src={`${baseUrl}/images/mama-osa-head.svg`} alt="Cabeza de mamá osa - logo" width={50} height={50} priority />
                <Nav />
            </div>
        </header>
    )
}