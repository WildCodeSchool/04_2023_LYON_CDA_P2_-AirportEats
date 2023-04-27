import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  function cartReducer(cart, action) {
    switch (action.type) {
      case "added": {
        return [...cart, action.product];
      }
      case "changed": {
        return cart.map((product) => {
          if (product.id === action.id) {
            return {
              ...product,
              quantity: action.newQuantity,
              totalPrice: product.price * action.newQuantity,
            };
          }
          return product;
        });
      }
      case "deleted": {
        return cart.filter((product) => product.id !== action.id);
      }
      default: {
        throw Error(`Unknown action: ${action.type}`);
      }
    }
  }

  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
