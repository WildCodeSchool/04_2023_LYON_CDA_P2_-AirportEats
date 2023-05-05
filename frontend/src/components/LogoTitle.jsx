import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import PlaneLogo from "../assets/airplaneAE.png";
import TitlePNG from "../assets/AEatsLogo.png";

export default function LogoTitle() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        m: 2,
      }}
      component={Link}
      to="/"
    >
      <Box
        sx={{
          background: `url(${PlaneLogo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: 25,
          height: 25,
          marginRight: 1,
        }}
      />
      <Box
        sx={{
          background: `url(${TitlePNG})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: 120,
          height: 25,
        }}
      />
    </Box>
  );
}
