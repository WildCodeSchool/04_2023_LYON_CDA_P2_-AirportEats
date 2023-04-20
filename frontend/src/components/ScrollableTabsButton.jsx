import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Avatar, ButtonBase, Typography } from "@mui/material";

export default function ScrollableTabsButton() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        // scrollButtons={{ xs: false, lg: true }}
        scrollButtons
        aria-label="scrollable prevent tabs example"
      >
        <Box
          component={ButtonBase}
          sx={{
            width: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Avatar
            src="https://www.themealdb.com/images/media/meals/1550441882.jpg/preview"
            alt="Test"
          />
          <Typography variant="caption" display="block">
            Test
          </Typography>
        </Box>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}
