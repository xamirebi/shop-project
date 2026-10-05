import { useCart } from "../context/cartContext";
import { useState } from "react";
import './AddToCart.css';
function AddToCart({ productId }) {
  const { addToCart } = useCart();
  const [showAdded, setShowAdded] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await addToCart(productId);
    setIsLoading(false);

    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 3000);
  };
  return (
    <div className="position-relative">
      {showAdded && <div className="added-message">Added</div>}

      <button
        className="btn btn-dark btn-sm"
        type="button"
        title="Add to cart"
        onClick={handleClick}
        disabled={isloading}
      >
        { isloading ? '...' : 'Add to Cart'}
      </button>
    </div>
  );
}
export default AddToCart;