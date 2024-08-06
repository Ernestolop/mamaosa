import Image from "next/image";
import styles from "./Home.module.css";

export const About = () => {
    return (
        <section className={styles.about}>
        <div className={styles.about__container}>
          <div className={styles.about__text}>
            <h2>Sobre Mamá Osa</h2>
            <div>
              <p>Somos una confitería artesanal con más de 20 años de experiencia, comprometidos con la calidad y la innovación. Nuestros dulces se elaboran con los mejores ingredientes naturales, sin conservantes ni colorantes artificiales.</p>
              <p>Nuestra misión es brindar a nuestros clientes una experiencia única y deliciosa, honrando la tradición de la repostería paraguaya.</p>
            </div>
          </div>
          <Image className={styles.about__image} src="/images/mama-osa.svg" alt="Mamá Osa - Confitería Artesanal" width={200} height={400} />
        </div>
      </section>
    )
}