import * as React from "react";
import Modal from "@components/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

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
              sx={{ color: "#e1b1b1", fontWeight: "bold" }}
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

MealCard.propTypes = {
  mName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
