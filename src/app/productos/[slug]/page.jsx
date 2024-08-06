export const revalidate = 60 * 60 * 24 * 7; // 1 week

import Image from 'next/image';
import Link from 'next/link';

export default function Producto({ params }) {

    const { slug } = params;

    return (
        <>
            <main>
                <div>
                    <h1>Alfajores</h1>
                    <p>Deliciosos alfajores de maicena.</p>
                    <div>
                        <p className={styles.product__price}>{price}Gs</p>
                        <button>
                            <Link className={styles.product__action} href={whatsappLink}>
                                Pedir
                            </Link>
                        </button>
                    </div>
                </div>
                <Image className={styles.product__image} src={image.url} alt={image.alt} width={400} height={400} />
            </main>
        </>
    );
}