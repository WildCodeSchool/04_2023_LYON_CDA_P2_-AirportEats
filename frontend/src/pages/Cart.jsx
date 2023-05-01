import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, handleModifyQuantity, handleDelete } = useCart();

  return (
    <>
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
        {cart.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <p>
                IdMeal: {meal.idMeal}, Name: {meal.strMeal}, Quantity:
                {meal.quantity}, Price: {meal.price}, TotalPrice:{" "}
                {meal.totalPrice}
              </p>
              <button
                type="button"
                onClick={() =>
                  handleModifyQuantity(meal.idMeal, meal.quantity - 1)
                }
              >
                -
              </button>
              <button
                type="button"
                onClick={() =>
                  handleModifyQuantity(meal.idMeal, meal.quantity + 1)
                }
              >
                +
              </button>
              <button type="button" onClick={() => handleDelete(meal.idMeal)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
