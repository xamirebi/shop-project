import './HomePage.css';
function ProductCard({product}) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm product-card">
        <div className="container image-container">
          <img src={product.image} alt={product.title} className="card-img-top p-3 product-image" />
        </div>
        <div className="card-body d-flex flex-column">
          <h6 className="card-title limit-text-to-2-lines" title={product.title}>
            {product.title}
          </h6>
          <div className="d-flex justify-content-between align-items-center mt-auto" title='price'>
            <strong className="text-dark">
              ${product.price}
            </strong>
            <button className="btn btn-dark btn-sm" title='Add to cart'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard;