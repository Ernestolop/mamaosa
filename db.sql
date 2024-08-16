CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  description TEXT,
  page_content TEXT,
  price INTEGER,
  images JSONB
);