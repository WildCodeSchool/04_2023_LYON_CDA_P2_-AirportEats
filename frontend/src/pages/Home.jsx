import ScrollableTabsButton from "@components/ScrollableTabsButton";
import { Box, Link, Typography } from "@mui/material";
import LogoAPI from "../assets/MealDB-Logo.png";

export default function Home() {
  return (
    <>
      <ScrollableTabsButton />
      <Box
        component={Link}
        href="https://www.themealdb.com/api.php"
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin={8}
      >
        <Box
          sx={{
            background: `url(${LogoAPI})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: 40,
            width: 240,
          }}
        />
        <Typography variant="body1">Used TheMealDB API</Typography>
      </Box>
    </>
  );
}
