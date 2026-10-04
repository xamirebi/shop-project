import { useState, useEffect } from "react";
import productService from "../services/productService";
function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [ error, setError] = useState(null);
  const [ loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    let isMounted = true;
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await productService.getById(id);
        if (isMounted) {
          if (res) {
            setProduct(res);
            setError(null);
          } else setError('Product not found');
        }
      } catch(err) {
        if (isMounted) setError(err.message || 'Failed to get the product');
        
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchProduct();
    return () => { isMounted = false; };
  } ,[id]);
  return { product, error, loading }
}
export default useProduct;