import Image from "next/image";
import Link from "next/link";
import styles from "./Ui.module.css";

export const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact__container}>
                <Image className={styles.contact__image} src="/images/mama-osa.svg" alt="Mamá Osa - Confitería Artesanal" width={200} height={400} />
                <div className={styles.contact__content}>
                    <h2 className={styles.contact__h2}>Contáctanos</h2>
                    <p>Si tienes alguna pregunta o sugerencia, no dudes en contactarnos. Estaremos encantados de atenderte.</p>
                    <nav>
                        <ul className={styles.contact__list}>
                            <li>
                                <Link className={styles.contact__link} href="https://wa.me/+595971580942" target="_blank" rel="noreferrer">
                                    <Image className={styles.contact__icon} src="/images/whatsapp.svg" alt="Mamá Osa - Confitería Artesanal" width={30} height={30} />
                                    <span>+595 971 580 942</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.contact__link} href="https://www.instagram.com/mama_osapy/" target="_blank" rel="noreferrer">
                                    <Image className={styles.contact__icon} src="/images/instagram.svg" alt="Mamá Osa - Confitería Artesanal" width={30} height={30} />
                                    <span>@mamaosa_py</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.contact__link} href="https://www.facebook.com/MamaOsaCA/" target="_blank" rel="noreferrer">
                                    <Image className={styles.contact__icon} src="/images/facebook.svg" alt="Mamá Osa - Confitería Artesanal" width={30} height={30} />
                                    <span>mamaosa</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section >
    )
}