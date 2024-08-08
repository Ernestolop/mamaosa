import Link from "next/link";
import styles from "./Ui.module.css";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <>
      <Contact />
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <p>© 2024 Mamá Osa - Confitería Artesanal. Todos los derechos reservados.</p>
          <Link href="https://www.linkedin.com/in/ernestolopez-dev/" target="_blank">Desarrollado Por <span className={styles.footer__developer}>Ernesto López</span></Link>
        </div>
      </footer>
    </>
  )
}