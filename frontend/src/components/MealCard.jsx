import React, { useState } from "react";
import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function MealCardC({ product, addToCart, toggleFavorite }) {
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
      <button type="button" onClick={() => toggleFavorite(product.id)}>
        <FavoriteIcon />
      </button>
    </div>
  );
}

import Modal from "@components/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";

export default function MealCard({ imgSrc, mName }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card
        sx={{ maxWidth: 300, height: 150, display: "flex" }}
        onClick={handleOpen}
      >
        <CardHeader
          sx={{ display: "flex", pr: 2 }}
          avatar={
            <Avatar
              sx={{ width: 95, height: 95 }}
              aria-label="recipe"
              src={imgSrc}
            />
          }
          title={
            <Typography variant="subtitle2">
              {mName.length > 30 ? `${mName.substring(0, 30)} ...` : mName}
            </Typography>
          }
          subheader={
            <Typography
              variant="caption"
              sx={{ color: "#E1B1B1", fontWeight: "bold" }}
            >
              From the Fork
            </Typography>
          }
        />
        <CardActions sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton aria-label="add to favorites" sx={{ p: 0 }}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Modal
        open={open}
        handleClose={handleClose}
        mName={mName}
        imgSrc={imgSrc}
      />
    </div>
  );
}

MealCardC.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pName: PropTypes.string.isRequired,
    price: PropTypes.number,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

MealCard.propTypes = {
  mName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
