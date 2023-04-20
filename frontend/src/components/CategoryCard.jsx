import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CategoryCard({ name, imgSrc, active }) {
  const styleActive = {
    border: "3px solid salmon",
    // boxSizing: "border-box"
  };
  return (
    <Box
      component={Link}
      to={`/meals/${name}`}
      sx={{
        width: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <Avatar src={imgSrc} alt={name} sx={active ? styleActive : null} />
      <Typography
        variant="caption"
        display="block"
        color="primary"
        fontWeight={active ? "bold" : null}
      >
        {name}
      </Typography>
    </Box>
  );
}

// propTypes active

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
