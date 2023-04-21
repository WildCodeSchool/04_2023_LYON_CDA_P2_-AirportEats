import * as React from "react";
import { Avatar, Box, Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import allCategories from "../ressources/allCategories";

export default function ScrollableTabsButton() {
  const { category } = useParams();

  const [value, setValue] = React.useState(category || false);

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/meals/${newValue}`);
    setValue(newValue);
  };

  const location = useLocation().pathname;

  React.useEffect(() => {
    if (location === "/meals") {
      setValue(false);
    }
  }, [location]);

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
              value={thisCategory.cName}
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
