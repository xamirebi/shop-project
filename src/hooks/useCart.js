import { useState, useEffect } from "react";
import cartService from "../services/cartService";
function useCart() {
  const [ cart, setCart] = useState([]);
  const [ error, setError] = useState(null);
  const [ loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await cartService.getCart();
        setCart(res);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } 
    fetchCart();
  },[])
  return {cart, error, loading};
}
export default useCart;