import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function ScrollableTabsButton() {
  const allCategories = [
    {
      id: 0,
      cName: "American",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg/preview",
    },
    {
      id: 1,
      cName: "Italian",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/1550441882.jpg/preview",
    },
    {
      id: 2,
      cName: "Japanese",
      imgSrc:
        "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview",
    },
    // {
    //   id: 3,
    //   cName: "American",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg/preview",
    // },
    // {
    //   id: 4,
    //   cName: "Italian",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/1550441882.jpg/preview",
    // },
    // {
    //   id: 5,
    //   cName: "Japanese",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview",
    // },
    // {
    //   id: 6,
    //   cName: "American",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg/preview",
    // },
    // {
    //   id: 7,
    //   cName: "Italian",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/1550441882.jpg/preview",
    // },
    // {
    //   id: 8,
    //   cName: "Japanese",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview",
    // },
    // {
    //   id: 9,
    //   cName: "American",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg/preview",
    // },
    // {
    //   id: 10,
    //   cName: "Italian",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/1550441882.jpg/preview",
    // },
    // {
    //   id: 11,
    //   cName: "Japanese",
    //   imgSrc:
    //     "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg/preview",
    // },
  ];

  const { category } = useParams();

  const [value, setValue] = React.useState(
    allCategories.filter((thisCategory) => thisCategory.cName === category)[0]
      .id
  );

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/meals/${allCategories[newValue].cName}`);
    setValue(newValue);
  };

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
