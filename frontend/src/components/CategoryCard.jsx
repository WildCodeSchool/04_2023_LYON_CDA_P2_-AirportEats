import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function CategoryCard({ name, src }) {
  return (
    <Box
      sx={{
        width: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 1,
      }}
    >
      <Avatar src={src} alt={name} />
      <Typography variant="caption" display="block">
        {name}
      </Typography>
    </Box>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
