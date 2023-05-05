import * as React from "react";
import Icon from "@mui/material/Icon";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
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
    <Box sx={{ bgcolor: "transparent" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile={false}
        aria-label="scrollable prevent tabs example"
      >
        {allCategories.map((thisCategory) => {
          return (
            <Tab
              key={thisCategory.id}
              label={thisCategory.cName}
              value={thisCategory.cName}
              icon={
                <Icon
                  component={thisCategory.icon}
                  sx={{
                    color: "black",
                    width: "50px",
                    margin: "20px",
                    height: "30px",
                    transition: "transform 0.2s",
                  }}
                />
              }
              sx={{
                ":hover": {
                  transform: "scale(1.2)",
                },
                ":active": {
                  transform: "scale(1.2)",
                  fontWeight: "bold",
                },
              }}
            />
          );
        })}
      </Tabs>
      <Divider variant="middle" sx={{ margin: "30px" }} />
    </Box>
  );
}
