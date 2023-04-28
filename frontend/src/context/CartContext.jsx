import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  function cartReducer(cart, action) {
    switch (action.type) {
      case "added": {
        return [...cart, action.meal];
      }
      case "changed": {
        return cart.map((meal) => {
          if (meal.idMeal === action.idMeal) {
            return {
              ...meal,
              quantity: action.newQuantity,
              totalPrice: meal.price * action.newQuantity,
            };
          }
          return meal;
        });
      }
      case "deleted": {
        return cart.filter((meal) => meal.idMeal !== action.idMeal);
      }
      default: {
        throw Error(`Unknown action: ${action.type}`);
      }
    }
  }

  const [cart, dispatch] = useReducer(cartReducer, []);

  // console.log(cart);

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
