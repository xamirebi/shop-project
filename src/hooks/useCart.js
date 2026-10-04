import { useState, useEffect } from "react";
import cartService from "../services/cartService";
function useCart() {
  const [ cart, setCart] = useState([]);
  const [ error, setError] = useState(null);
  const [ loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    async function fetchCart() {
      try {
        const res = await cartService.getCart();
        if (isMounted) {
          if (res) {
            setCart(res);
          } else setError("Cart wasn't found")
        }
      } catch(err) {
        if (isMounted) setError(err.message || 'Failed to get the cart');
      } finally {
        if (isMounted) setLoading(false);
      }
    } 
    fetchCart();
    return () => { isMounted = false }
  },[])
  return {cart, error, loading};
}
export default useCart;