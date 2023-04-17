import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [reload, setReload] = useState(false);
  const [nbProducts, setNbProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    // localStorage.setItem(e.target[0].name, e.target[0].value);

    const product = {
      id: e.target[0].value,
      name: e.target[1].value,
      quantity: e.target[2].value || 3,
      price: e.target[3].value || 9,
    };

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // console.log(JSON.parse(localStorage.getItem("cart")));
    // console.log(JSON.parse(localStorage.getItem("cart")).length);

    setReload(!reload);
  }

  function changeNbProducts() {
    const myArray = JSON.parse(localStorage.getItem("cart"));
    const newNb = myArray.reduce(
      (acc, currentProduct) => acc + parseInt(currentProduct.quantity, 10),
      0
    );
    setNbProducts(newNb);
  }

  function changePrice() {
    const myArray = JSON.parse(localStorage.getItem("cart"));
    const newPrice = myArray
      .reduce(
        (acc, currentProduct) => acc + parseFloat(currentProduct.price),
        0
      )
      .toString()
      .replace(".", ",");
    setTotalPrice(newPrice);
  }

  useEffect(() => {
    changeNbProducts();
    changePrice();
  }, [reload]);

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
    </div>
  );
}
