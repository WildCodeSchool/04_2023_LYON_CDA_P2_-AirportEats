// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";

// const images = [
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "animals" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "animals" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "animals" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "city" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "city" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "city" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "nature" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "nature" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "nature" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "cats" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "cats" } },
//   { thumbnail: { url: "https://placekitten.com/200/200", name: "cats" } },
// ];

// export default function StandardImageList() {
//   return (
//     <ImageList
//       sx={{
//         gridAutoFlow: "column",
//         gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
//         gridAutoColumns: "minmax(160px, 1fr)",
//       }}
//     >
//       {images.map((image, index) => (
//         <ImageListItem key={index}>
//           <img src={image.thumbnail.url} alt="" />
//           <ImageListItemBar title={image.thumbnail.name} />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }
