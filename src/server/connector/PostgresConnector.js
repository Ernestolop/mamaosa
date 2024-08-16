import pg from 'pg';

class PostgresConnector {
  #pool;

  constructor() {
    this.#pool = new pg.Pool({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
      ssl: {
        rejectUnauthorized: false, 
      },
    });
  }

  async executeQuery(query, params = []) {
    const client = await this.#pool.connect();
    try {
      const result = await client.query(query, params);
      return result.rows;
    } catch (err) {
      console.error('Error ejecutando la consulta:', err);
      throw err;
    } finally {
      client.release();
    }
  }

  async insertProduct(productData) {
    const query = `
      INSERT INTO products (slug, name, description, page_content, price, images)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
    `;
    const params = [
      productData.slug,
      productData.name,
      productData.description,
      productData.page_content,
      productData.price,
      JSON.stringify(productData.images),
    ];

    const [product] = await this.executeQuery(query, params);
    return product.id;
  }

  async insertProductWithImages(productData) {
    const client = await this.#pool.connect();

    try {
      await client.query('BEGIN');

      const productId = await this.insertProduct(productData);

      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('Error insertando producto:', err);
      throw err;
    } finally {
      client.release();
    }
  }

  async getProducts(pageable) {
    const { page = 1, size = 10 } = pageable;
    const offset = (page - 1) * size;

    const query = `
      SELECT id, slug, name, description, page_content, price, images
      FROM products
      ORDER BY id
      LIMIT $1 OFFSET $2
    `;
    const params = [size, offset];

    const rows = await this.executeQuery(query, params);

    return rows.map(row => ({
      ...row,
      images: row.images ? row.images : [],
    }));
  }

  async closeConnection() {
    await this.#pool.end();
  }
}

export default PostgresConnector;
