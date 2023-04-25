import React from "react";
import "./App.css";
import MealCard from "@components/MealCard";

// import Context
import { useCart, useCartDispatch } from "./CartContext";

export default function App() {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const examples = [
    {
      id: 1,
      pName: "Curry",
      price: 12,
    },
    {
      id: 2,
      pName: "Tacos",
      price: 8,
    },
    {
      id: 3,
      pName: "Kebab",
      price: 10.5,
    },
  ];

  function handleDelete(id) {
    // const validation = confirm("Voulez-vous supprimer cet élément du panier ?");
    const validation = true;
    if (validation) {
      // reducer action deleted
      return dispatch({
        type: "deleted",
        id,
      });
    }
    return false;
  }

  function handleModifyQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
      return handleDelete(id);
    }

    // reducer action changed
    return dispatch({
      type: "changed",
      id,
      newQuantity,
    });
  }

  const handleAddToCart = (newProduct, quantity) => {
    const testProduct = cart.find((e) => e.id === newProduct.id);
    if (testProduct) {
      return handleModifyQuantity(
        testProduct.id,
        testProduct.quantity + quantity
      );
    }

    // reducer action added
    return dispatch({
      type: "added",
      product: {
        ...newProduct,
        quantity,
        totalPrice: newProduct.price * quantity,
      },
    });
  };

  return (
    /* Import Context Provider in main.jsx */
    <div className="App">
      <div>
        {examples.map((product) => {
          return (
            <MealCard
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          );
        })}
      </div>
      <div>
        <p>
          Nb Products:{" "}
          {cart.reduce(
            (acc, currentProduct) =>
              acc + parseInt(currentProduct.quantity, 10),
            0
          )}
        </p>
        <p>
          Price :
          {cart
            .reduce(
              (acc, currentProduct) =>
                acc + parseFloat(currentProduct.totalPrice),
              0
            )
            .toString()
            .replace(".", ",")}
          €
        </p>
      </div>
      <div>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <p>
                Id: {product.id}, Name: {product.pName}, Quantity:
                {product.quantity}, Price: {product.price}, TotalPrice:{" "}
                {product.totalPrice}
              </p>
              <button
                type="button"
                onClick={() =>
                  handleModifyQuantity(product.id, product.quantity - 1)
                }
              >
                -
              </button>
              <button
                type="button"
                onClick={() =>
                  handleModifyQuantity(product.id, product.quantity + 1)
                }
              >
                +
              </button>
              <button type="button" onClick={() => handleDelete(product.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
