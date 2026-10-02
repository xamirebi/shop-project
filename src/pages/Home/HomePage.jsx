import axios from "axios";
import { useState, useEffect } from "react";
import ProductsGrid from "./ProductsGrid";
function HomePage() {
  const [ products, setProducts] = useState([]);
  const [ error, setError] = useState(null);
  const [ loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setError(null);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } 
    fetchProducts();
  },[])
  if (loading) return <div style={{ display: 'flex', justifyContent: "center", color: 'black'}}><p>Loading...</p></div>
  if (error) return <p>Error: {error}</p>
  return (
    <ProductsGrid products={products}/>
  )
}
export default HomePage;