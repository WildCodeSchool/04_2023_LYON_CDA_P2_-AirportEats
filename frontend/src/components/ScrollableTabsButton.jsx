import * as React from "react";
import Icon from '@mui/material/Icon';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';
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
  const icons = {
    "Italian": DinnerDiningOutlinedIcon,
    "American": FastfoodOutlinedIcon,
    "Japanese": RiceBowlOutlinedIcon,
  };
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/meals/${allCategories[newValue].cName}`);
    setValue(newValue);
  };
  console.info(category);
  return (
    <Box sx={{ bgcolor: "transparent" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile={false}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{ style: { background: "#CA9584", height: "2px" } }}
      >
        {allCategories.map((thisCategory) => {
          return (
            <Tab
              key={thisCategory.id}
              label={thisCategory.cName}
              icon={
              <Icon component={icons[thisCategory.cName]} 
              sx={{
                color: "black", 
                width: "50px", 
                margin: "20px",
                height: "30px", 
                transition: "transform 0.2s",
              }}/>
            }
            sx={{
              ":hover": {
                transform: "scale(1.2)",
              },
              ":active": {
                transform: "scale(1.2)",
                fontWeight: "bold",
              },
            }}/>
          );
        })}
      </Tabs>
      <Divider variant="middle" sx={{margin: "30px"}}/>
    </Box>
  );
}
