import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

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

export default function MealModal({ open, handleClose, mName, imgSrc }) {
  const [quantity, setQuantity] = React.useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {};

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
              <img src={imgSrc} alt={mName} style={imgStyle} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={tagStyle}>2 mins away</span>
              <IconButton aria-label="add to favorites" sx={{ p: 0 }}>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </div>

            <div style={titleStyle}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {mName}
              </Typography>
            </div>

            <Box display="flex" alignItems="center" mt={2}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                20.28$
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
                onClick={handleAddToCart}
                sx={{ borderRadius: "16px" }}
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
  mName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};