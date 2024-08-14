import Image from "next/image";
import styles from "./Home.module.css";

export const About = () => {

  const baseUrl = process.env.BASE_URL;

  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__text}>
          <h2>Sobre Mamá Osa</h2>
          <div>
            <p>En Mamá Osa, la repostería artesanal es nuestra manera de compartir alegría. Nos enfocamos en crear dulces y postres únicos, hechos con ingredientes selectos y mucho cariño. Cada creación es una mezcla perfecta de sabor y tradición, diseñada para hacer de tus momentos especiales algo aún más memorable. Mamá Osa es donde la calidad y el amor por lo artesanal se encuentran para deleitarte en cada bocado.</p>
          </div>
        </div>
        <Image className={styles.about__image} src={`${baseUrl}/images/mama-osa.svg`} alt="Mamá Osa - Confitería Artesanal" width={200} height={400} priority />
      </div>
    </section>
  )
}