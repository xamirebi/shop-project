import { useState, useEffect } from "react";
import productService from "../services/productService";
function useProducts() {
  const [ products, setProducts] = useState([]);
  const [ error, setError] = useState(null);
  const [ loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await productService.getAll();
        setProducts(res);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } 
    fetchProducts();
  },[])
  return {products, error, loading};
}
export default useProducts;