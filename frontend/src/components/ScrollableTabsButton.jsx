import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

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
        TabIndicatorProps={{ style: { background: "salmon" } }}
      >
        {/* {allCategories.map((thisCategory) => {
          return (
            <Tab
              label={thisCategory.cName}
              icon={
                <Avatar alt={thisCategory.cName} src={thisCategory.imgSrc} />
              }
              key={thisCategory.index}
            />
          );
        })} */}
        <Tab label="test" icon={<Avatar />} />
      </Tabs>
    </Box>
  );
}
