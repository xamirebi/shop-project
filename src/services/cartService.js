import api from "./api";
const cartService = {
  async getCart() {
    const response = await api.get('/api/cart-items?expand=product');
    return response.data;
  },
  async removeFromCart(id) {
    const response = await api.delete(`/api/cart-items/${id}`);
    return response.data;
  },
  async addToCart(id) {
    const response = await api.post("/api/cart-items", {
      productId: id,
      quantity: 1
    });
    return response.data;
  }
}
export default cartService;