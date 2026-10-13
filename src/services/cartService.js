import api from "./api";
class CartService {
  async getCart() {
    const response = await api.get('/api/cart-items?expand=product');
    return response.data;
  }
  async removeFromCart(productId) {
    await api.delete(`/api/cart-items/${productId}`);
  }
  async addToCart(id) {
    const response = await api.post("/api/cart-items", {
      productId: id,
      quantity: 1
    });
    return response.data;
  }
}
export default new CartService;