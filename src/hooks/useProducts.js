import { useState, useEffect } from "react";
import productService from "../services/productService";
function useProducts() {
  const [ products, setProducts] = useState([]);
  const [ error, setError] = useState(null);
  const [ loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    async function fetchProducts() {
      try {
        const res = await productService.getProducts();
        if (isMounted) {
          if (res) {
            setProducts(res);
          } else setError('Products were not found');
        }
      } catch(err) {
        if (isMounted) setError(err.message || 'Failed to get the products');
      } finally {
        if (isMounted) setLoading(false);
      }
    } 
    fetchProducts();
    return () => { isMounted = false }
  },[])
  return {products, error, loading};
}
export default useProducts;