import GoogleSheetConnector from "@/server/connector/GoogleSheetConnector";
import ProductNotFound from "@/server/modules/product/errors/ProductNotFound";

export const getProductsPage = async pageable => {

  const { page, size } = pageable;
  const range = `products!A${page * size + 1}:B${(page + 1) * size}`;

  const googleSheetConnector = new GoogleSheetConnector();
  const products = await googleSheetConnector.getSheetValues(range);

  if (!products) {
    return {
      currentPage: 0,
      totalPages: 0,
      products: []
    }
  }

  //hacer otro llamado a la api de google para obtener la cantidad de productos
  const rangeCount = `products!A:A`;
  const allProducts = await googleSheetConnector.getSheetValues(rangeCount);
  const totalProducts = allProducts.length;



  return {
    currentPage: page,
    totalPages: Math.ceil(totalProducts / size),
    products: products.map(row => JSON.parse(row[1]))
  }
}

export const getProductByRow = async row => {

  const googleSheetConnector = new GoogleSheetConnector();
  const range = `products!A${row}:E${row}`;
  const rows = await googleSheetConnector.getSheetValues(range);

  if (!rows || !rows.length) {
    throw new ProductNotFound();
  }

  return JSON.parse(rows[0][1]);

}

export const getProductBySlug = async slug => {

  const googleSheetConnector = new GoogleSheetConnector();
  const range = `products!A:A`;
  const rows = await googleSheetConnector.getSheetValues(range);

  if (!rows) {
    throw new ProductNotFound();
  }

  const row = rows.findIndex(row => row[0] === slug);

  if (row === -1) {
    throw new ProductNotFound();
  }

  return getProductByRow(row + 1);
}