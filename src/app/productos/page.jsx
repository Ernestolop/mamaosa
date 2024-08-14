
import { redirect } from "next/navigation";
import styles from "./productos.module.css";
import { getProductsPage } from "@/server/modules/product/actions/productActions";
import { Products, PageableControls } from "@/components";

export const metadata = {
    title: "Productos | Confitería Mamá Osa",
    description: "Delicias artesanales hechas con amor. Conoce nuestra variedad de productos y haz tu pedido online."
};


export default async function Productos({ searchParams }) {

    const pageable = getPageable(searchParams);
    const { currentPage, totalPages, products } = await getProductsPage(pageable);

    if (products.length === 0 && pageable.page > 0) {
        redirect("/productos");
    }

    return (
        <>
            <main className={styles.products}>
                <div className={styles.products__container}>
                    <h1 className={styles.products__h1}>Productos</h1>
                    <Products products={products} />
                    <PageableControls pageable={{ currentPage, totalPages }} />
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