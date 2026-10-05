import './HomePage.css';
import { Link } from 'react-router';
import AddToCart from '../../components/AddToCart.jsx';
function ProductCard({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm product-card">
        <Link to={`/product/${product.id}`}>
          <div className="container image-container p-4">
            <img src={product.image} alt={product.name} className="product-image rounded-3" />
          </div>
        </Link>
        
        <div className="card-body d-flex flex-column">
          <Link className="product-link" to={`/product/${product.id}`}>
            <h6 className="card-title limit-text-to-2-lines" title={product.name}>
              {product.name}
            </h6>
          </Link>
          <div className="d-flex justify-content-between align-items-center mt-auto" title='price'>
            <strong className="text-dark">
              ${(product.priceCents / 100).toFixed(2)}
            </strong>
            <AddToCart productId={product.id}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard;