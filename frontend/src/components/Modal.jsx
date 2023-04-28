import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useCart, useCartDispatch } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "bold",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

const imgStyle = {
  maxWidth: "100%",
  maxHeight: "35vh",
  borderRadius: "50%",
};

const btnStyle = {
  boxShadow:
    "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
  borderRadius: "39px",
};

const titleStyle = {
  display: "flex",
  alignItems: "center",
  paddingBottom: "50px",
};

const tagStyle = {
  color: "black",
  opacity: "39%",
  borderRadius: "8px",
  fontSize: "0.8rem",
  marginRight: "1rem",
};

export default function MealModal({ open, handleClose, meal }) {
  const [quantity, setQuantity] = React.useState(0);
  const { favorites, setFavorites } = useFavorites();

  // Passer dans context ???
  const toggleFavorite = (newIdMeal) => {
    if (favorites.includes(newIdMeal)) {
      setFavorites(favorites.filter((idMeal) => idMeal !== newIdMeal));
    } else {
      setFavorites([...favorites, newIdMeal]);
    }
  };

  const price = 10;

  const cart = useCart();
  const dispatch = useCartDispatch();

  // Mettre dans modal
  function handleDelete(idMeal) {
    // const validation = confirm("Voulez-vous supprimer cet élément du panier ?");
    const validation = true;
    if (validation) {
      // reducer action deleted
      return dispatch({
        type: "deleted",
        idMeal,
      });
    }
    return false;
  }

  // Mettre dans modal
  function handleModifyQuantity(idMeal, newQuantity) {
    if (newQuantity <= 0) {
      return handleDelete(idMeal);
    }

    // reducer action changed
    return dispatch({
      type: "changed",
      idMeal,
      newQuantity,
    });
  }

  // Mettre dans modal
  const handleAddToCart = (newMeal, newPrice, newQuantity) => {
    const testMeal = cart.find((e) => e.idMeal === newMeal.idMeal);
    if (testMeal) {
      return handleModifyQuantity(
        testMeal.idMeal,
        testMeal.quantity + quantity
      );
    }

    // reducer action added
    return dispatch({
      type: "added",
      meal: {
        ...newMeal,
        price: newPrice,
        quantity: newQuantity,
        totalPrice: price * quantity,
      },
    });
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={imgStyle}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={tagStyle}>2 mins away</span>
              <IconButton
                aria-label="add to favorites"
                sx={{ p: 0 }}
                onClick={() => toggleFavorite(meal.idMeal)}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </div>

            <div style={titleStyle}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {meal.strMeal}
              </Typography>
            </div>

            <Box display="flex" alignItems="center" mt={2}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                {price} €
              </Typography>
              <Button
                variant="contained"
                onClick={handleDecreaseQuantity}
                sx={btnStyle}
              >
                -
              </Button>
              <Typography variant="h6" sx={{ mx: 2 }}>
                {quantity}
              </Typography>
              <Button
                variant="contained"
                onClick={handleIncreaseQuantity}
                sx={btnStyle}
              >
                +
              </Button>
            </Box>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "50px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  handleClose();
                  setQuantity(0);
                  handleAddToCart(meal, price, quantity);
                }}
                sx={{ borderRadius: "16px" }}
                disabled={!quantity}
              >
                Ajouter au panier
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

MealModal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.number.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
