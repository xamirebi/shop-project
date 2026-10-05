import useProduct from "../../hooks/useProduct";
import { useParams, useNavigate } from "react-router";
import { API_BASE_URL } from "../../services/api";
import AddToCart from "../../components/AddToCart";
function ProductDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { product, error, loading } = useProduct(id);
  if (loading) return <div className="container my-5">Loading...</div>;
  if (error) return <div className="container my-5">{error}</div>;
  if (!product) return <div className="container my-5">Product not found</div>;
  console.log('product:', product);
  return (
    <div className="container my-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => {navigate('/')}}>
        ← Back
      </button>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <img src={
              product.image.startsWith('http') ? product.image : `${API_BASE_URL}/${product.image}`} alt={product.name} title={product.name}  style={{ maxHeight: '400px', objectFit: 'contain'}}/>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="h3 mb-2" title={product.name}>{product.name}</h3>
          <div className="d-flex flex-column align-items-center" style={{ height:"250px"}}>
            <strong className="text-dark ms-auto me-auto ms-md-0 me-md-auto mt-3" title="price">${(product.priceCents/100).toFixed(2)}</strong>
            <AddToCart productId={product.id}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetailsPage;