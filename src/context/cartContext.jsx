import { useState, useEffect, useContext, createContext } from "react";
import cartService from "../services/cartService";
const cartContext = createContext();
export function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  useEffect(() => {
    let isMounted = true;
    async function fetchCart() {
      try {
        const res = await cartService.getCart();
        if (isMounted) {
          if (res) {
            setCart(res);
            setError(null);
          } else setError('Cart is empty')
        }
      } catch (err) {
        if (isMounted) setError(err.message || 'Failed to get the cart')
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchCart();
    return () => { isMounted = false; };
  },[]);
  

  const addToCart = async (productId) => {
    try {
      await cartService.addToCart(productId);
      const updated = await cartService.getCart();
      setCart(updated);
    } catch(err) {
      setError(err.message || 'Failed to add to cart');
    }
  };
  const removeFromCart = async (productId) => {
    try {
      await cartService.removeFromCart(productId);
      const updated = await cartService.getCart();
      setCart(updated);
    } catch(err) {
      setError(err.message || 'Failed to remove from the cart')
    }
  };
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return (
    <cartContext.Provider value={{
      cart,
      loading,
      error,
      addToCart,
      removeFromCart,
      totalItems
    }}> 
      {children} 
    </cartContext.Provider>
  )
}
export function useCart() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};