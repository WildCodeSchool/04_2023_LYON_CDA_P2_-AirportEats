import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";
import FavoriteToggleButton from "./FavoriteToggleButton";

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
  "@media (max-width: 428px)": {
    width: "270px",
  },
};

const imgStyle = {
  maxWidth: "70%",
  // maxHeight: "35vh",
  borderRadius: "50%",
  boxShadow:
    "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
};

const btnStyle = {
  minWidth: "2px",
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
  fontWeight: "700",
};

export default function MealModal({ open, handleClose, meal }) {
  const [quantity, setQuantity] = React.useState(0);

  // Function pour random price
  function randomPrice(id) {
    if (id % 3 === 0) {
      return 10;
    }
    if (id % 2 === 0) {
      return 6;
    }
    return 8;
  }
  const price = randomPrice(Number(meal.idMeal));

  const { handleAddToCart } = useCart();

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
              <FavoriteToggleButton meal={meal} />
            </div>

            <div style={titleStyle}>
              <Typography
                id="transition-modal-title"
                variant="h5"
                component="h2"
                sx={{ fontWeight: "600" }}
              >
                {meal.strMeal}
              </Typography>
            </div>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              mt={2}
            >
              <Typography variant="h6" sx={{ mr: 2, fontWeight: "600" }}>
                {price} €
              </Typography>
              <Box sx={{ display: "flex", ml: "5" }}>
                <Button onClick={handleDecreaseQuantity} sx={btnStyle}>
                  <RemoveCircleIcon />
                </Button>
                <Typography variant="h5" sx={{ mx: 2, fontWeight: "600" }}>
                  {quantity}
                </Typography>
                <Button onClick={handleIncreaseQuantity} sx={btnStyle}>
                  <AddCircleIcon fontSize="medium" />
                </Button>
              </Box>
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
                sx={{ borderRadius: "16px", width: "200px", color: "white" }}
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
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
