import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import useProducts from "../../hooks/useProducts";
import ProductsGrid from "./ProductsGrid";
function HomePage() {
  const { products, loading, error} = useProducts();
  if (loading) return <div></div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="container my-5">
      <ProductsGrid products={products}/>
    </div>
  )
}
export default HomePage;