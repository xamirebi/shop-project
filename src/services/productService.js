import api from "./api";
const productService = {
  async getProducts() {
    const response = await api.get('/api/products');
    return response.data;
  },
  async getById(id) {
    const all = await this.getProducts();
    return all.find(p => p.id === Number(id));
  }
}
export default productService;