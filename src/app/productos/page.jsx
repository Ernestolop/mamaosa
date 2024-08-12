export const dynamic = 'force-static';
export const revalidate = 300;

import styles from "./productos.module.css";
import { getProductsPage } from "@/server/modules/product/actions/productActions";
import { Products } from "@/components";

export default async function Productos({ searchParams }) {

    const pageable = getPageable(searchParams);
    console.log(pageable);
    const products = await getProductsPage(pageable);

    return (
        <>
            <main className={styles.products}>
                <div className={styles.products__container}>
                    <h1 className={styles.products__h1}>Productos</h1>
                    <Products products={products} />
                </div>
            </main>
        </>
    );
}

const getPageable = (searchParams) => {
    if (!searchParams) {
        return { page: 0, size: 10 };
    }

    let { page } = searchParams;
    const size = 10;

    if (isNaN(Number(page)) || page < 0) {
        page = 0;
    }

    page = Number(page);

    return { page, size };
}