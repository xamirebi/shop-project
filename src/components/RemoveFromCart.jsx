import { useCart } from "../context/cartContext";
import { useState } from "react";
function RemoveFromCart({ productId }) {
  const [ showRemoved, setShowRemoved ] = useState(false);
  const [ isloading, setIsLoading ] = useState(false);
  const { removeFromCart } = useCart();
  const handleClick = async () => {
    setIsLoading(true);
    await removeFromCart(productId);
    setIsLoading(false);

    setShowRemoved(true);
    setTimeout(() => setShowRemoved(false), 3000);
  };
   return (
    <div className="position-relative">
      {showRemoved && <div className="removed-message">Removed</div>}

      <button
        className="btn btn-danger btn-sm mx-2"
        type="button"
        title="Remove from Cart"
        onClick={handleClick}
        disabled={isloading}
      >
        { isloading ? '...' : 'Delete'}
      </button>
    </div>
  );
}
export default RemoveFromCart;