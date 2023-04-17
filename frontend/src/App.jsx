import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [nbProducts, setNbProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [myCart, setMyCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  function handleSubmit(e) {
    e.preventDefault();

    const product = {
      id: e.target[0].value || 1,
      name: e.target[1].value || "Poulet",
      quantity: e.target[2].value || 3,
    };

    product.price = (e.target[3].value || 9) * product.quantity;

    setMyCart([...myCart, product]);
  }

  function changeNbProducts() {
    const newNb = myCart.reduce(
      (acc, currentProduct) => acc + parseInt(currentProduct.quantity, 10),
      0
    );
    setNbProducts(newNb);
  }

  function changePrice() {
    const newPrice = myCart
      .reduce(
        (acc, currentProduct) => acc + parseFloat(currentProduct.price),
        0
      )
      .toString()
      .replace(".", ",");
    setTotalPrice(newPrice);
  }

  function handleDelete(id) {
    setMyCart(myCart.filter((product) => product.id !== id));
  }

  useEffect(() => {
    changeNbProducts();
    changePrice();
    localStorage.setItem("cart", JSON.stringify(myCart));
  }, [myCart]);

  return (
    <div className="App">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="id">Id : </label>
          <input type="text" id="id" name="id" />
          <br />
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" />
          <br />
          <label htmlFor="quantity">Quantity : </label>
          <input type="text" name="quantity" id="quantity" />
          <br />
          <label htmlFor="price">Price : </label>
          <input type="text" name="price" id="price" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>Nb Products: {nbProducts}</p>
        <p>Price : {totalPrice} €</p>
      </div>
      <div>
        {myCart.map((product) => {
          return (
            <div>
              Id: {product.id}, Name: {product.name}, Quantity:
              {product.quantity}, Price {product.price}
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
