import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './CartPage.css'
import useCart from "../../hooks/useCart";

function CartPage() {
  const { cart, error, loading } = useCart();
  if (loading) return <div></div>;
  if (error) return <div>{error}</div>;
  if (!cart?.length) return <div className="container my-5">Your cart is empty.</div>;

  return (
    <div className="container my-5">
      <h2 className="mb-4">Review Your Order</h2>
      <div className="row g-4">
        {cart.map((cartItem) => (
          <Fragment key={cartItem.id}>
            <div className="col-12 col-lg-8">
              <div className="card shadow-sm cart-card">
                <div className="image-container">
                  <img
                    src={cartItem.product.image}
                    alt={cartItem.product.name}
                    className="product-image mt-3 rounded-3"
                  />
                </div>
                <div className="card-body d-flex flex-column align-items-center py-4">
                  <h6
                    className="card-title limit-text-to-2-lines"
                    title={cartItem.product.name}
                  >
                    {cartItem.product.name}
                  </h6>
                  <div className="d-flex justify-content-between align-items-center mt-auto w-100">
                    <strong className="text-dark">
                      ${(cartItem.product.priceCents / 100).toFixed(2)}
                    </strong>
                    <strong className="text-dark">
                      Quantity: {cartItem.quantity}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default CartPage;