import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import allCategories from "../ressources/allCategories";

export default function ScrollableTabsButton() {
  const { category } = useParams();

  const [value, setValue] = React.useState(
    category
      ? allCategories.filter(
          (thisCategory) => thisCategory.cName === category
        )[0].id
      : false
  );

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/meals/${allCategories[newValue].cName}`);
    setValue(newValue);
  };
  console.info(category);
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile={false}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{ style: { background: "salmon" } }}
      >
        {allCategories.map((thisCategory) => {
          return (
            <Tab
              key={thisCategory.id}
              label={thisCategory.cName}
              icon={
                <Avatar alt={thisCategory.cName} src={thisCategory.imgSrc} />
              }
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
