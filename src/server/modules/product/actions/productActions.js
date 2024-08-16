import PostgresConnector from "@/server/connector/PostgresConnector";
import ProductNotFound from "@/server/modules/product/errors/ProductNotFound";

const postgresConnector = new PostgresConnector();

export const getProductsPage = async pageable => {
  try {
    const products = await postgresConnector.getProducts(pageable);

    if (!products.length) {
      return {
        currentPage: 0,
        totalPages: 0,
        products: []
      };
    }

    const totalProducts = await getTotalProductCount();
    const totalPages = Math.ceil(totalProducts / pageable.size);
    return {
      currentPage: pageable.page,
      totalPages,
      products
    };
  } catch (error) {
    console.error('Error getting products page:', error);
    throw error;
  }
};

export const getProductByRow = async row => {
  try {
    const product = await postgresConnector.executeQuery(
      `SELECT * FROM products ORDER BY id LIMIT 1 OFFSET $1`,
      [row - 1]
    );

    if (!product.length) {
      throw new ProductNotFound();
    }

    return product[0];
  } catch (error) {
    console.error('Error getting product by row:', error);
    throw error;
  }
};

export const getProductBySlug = async slug => {
  try {
    const product = await postgresConnector.executeQuery(
      `SELECT * FROM products WHERE slug = $1`,
      [slug]
    );

    if (!product.length) {
      throw new ProductNotFound();
    }

    return product[0];
  } catch (error) {
    console.error('Error getting product by slug:', error);
    throw error;
  }
};

export const getAllSlugs = async () => {
  try {
    const slugs = await postgresConnector.executeQuery(`SELECT slug FROM products`);
    return slugs.map(row => row.slug);
  } catch (error) {
    console.error('Error getting all slugs:', error);
    throw error;
  }
};

const getTotalProductCount = async () => {
  try {
    const result = await postgresConnector.executeQuery(`SELECT COUNT(*) FROM products`);
    return parseInt(result[0].count, 10);
  } catch (error) {
    console.error('Error getting total product count:', error);
    throw error;
  }
};