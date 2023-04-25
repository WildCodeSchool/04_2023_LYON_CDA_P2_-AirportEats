import { useState } from "react";
import PropTypes from "prop-types";

export default function MealCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  function plusQuantity() {
    return setQuantity(quantity + 1);
  }

  function minusQuantity() {
    if (quantity > 0) {
      return setQuantity(quantity - 1);
    }
    return false;
  }

  return (
    <div>
      <p>{product.pName}</p>
      <p>{product.price} €</p>
      <p>{quantity}</p>
      <button
        type="button"
        onClick={() => {
          minusQuantity();
        }}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => {
          plusQuantity();
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          setQuantity(0);
          addToCart(product, quantity);
        }}
        disabled={!quantity}
      >
        Add to cart
      </button>
    </div>
  );
}

MealCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pName: PropTypes.string.isRequired,
    price: PropTypes.number,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
