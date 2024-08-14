export const revalidate = 604800;

import styles from "./page.module.css";
import { getProductsPage } from "@/server/modules/product/actions/productActions";
import { Main, About, Products } from "@/components";

export const metadata = {
  title: "Confitería Mamá Osa | Delicias Artesanales en Paraguay",
  description: "Confitería Mamá Osa, lo mejor de la confitería artesanal en Paraguay. Entra y conoce más sobre nosotros y nuestros productos.",
  openGraph: {
    title: "Confitería Mamá Osa | Delicias Artesanales en Paraguay",
    description: "Confitería Mamá Osa, lo mejor de la confitería artesanal en Paraguay. Entra y conoce más sobre nosotros y nuestros productos.",
  }
};

export default async function Home() {

  const pageable = { size: 3, page: 0 };
  const { products } = await getProductsPage(pageable);

  return (
    <>
      <Main />
      <About />
      <section className={styles.products}>
        <div className={styles.products__container}>
          <h2 className={styles.products__h2}>Nuestros Productos Destacados</h2>
          <Products products={products} />
        </div>
      </section>
    </>
  );
}
