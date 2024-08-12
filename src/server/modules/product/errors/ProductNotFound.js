class ProductNotFound extends Error {
  constructor(message) {
    super(message); 
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ProductNotFound;