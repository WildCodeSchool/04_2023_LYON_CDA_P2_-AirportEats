import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { enqueueSnackbar } from "notistack";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  localStorage.setItem("cart", JSON.stringify(cart));

  function handleDelete(idMeal) {
    // const validation = confirm("Voulez-vous supprimer cet élément du panier ?");
    const validation = true;
    if (validation) {
      setCart(cart.filter((meal) => meal.idMeal !== idMeal));
      return enqueueSnackbar("Product removed", { variant: "success" });
    }
    return false;
  }

  function handleModifyQuantity(idMeal, newQuantity) {
    if (newQuantity <= 0) {
      return handleDelete(idMeal);
    }
    return setCart(
      cart.map((meal) => {
        if (meal.idMeal === idMeal) {
          return {
            ...meal,
            quantity: newQuantity,
            totalPrice: meal.price * newQuantity,
          };
        }
        return meal;
      })
    );
  }

  function handleAddToCart(newMeal, newPrice, newQuantity) {
    const findMeal = cart.find((e) => e.idMeal === newMeal.idMeal);
    if (findMeal) {
      return handleModifyQuantity(
        findMeal.idMeal,
        findMeal.quantity + newQuantity
      );
    }
    setCart([
      ...cart,
      {
        ...newMeal,
        price: newPrice,
        quantity: newQuantity,
        totalPrice: newPrice * newQuantity,
      },
    ]);
    return enqueueSnackbar("Article ajouté", { variant: "success" });
  }

  function handleEmptyCart() {
    setCart([]);
  }

  const contextValue = useMemo(
    () => ({
      cart,
      handleAddToCart,
      handleModifyQuantity,
      handleDelete,
      handleEmptyCart,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
