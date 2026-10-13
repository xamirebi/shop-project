import api from "./api";

class ProductService {
  async getProducts() {
    const response = await api.get('/api/products');
    return response.data;
  }

  async getById(id) {
    const all = await this.getProducts();
    return all.find(p => p.id === id);
  }
}

export default new ProductService();