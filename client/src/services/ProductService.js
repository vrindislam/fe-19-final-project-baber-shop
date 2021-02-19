import Ajax from "./Ajax";

class ProductService {
  async getProductsForBanner (category = { id: "razor" }) {
    const response = await Ajax.get(`/products/filter?categories=${category.id}`);
    if (response.productsQuantity > 0) {
      return response.products.splice(0, 4);
    } else {
      return null;
    }
  }

  async createProduct (product) {
    return await Ajax.post("/products", product);
  }
}

export default new ProductService();