import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#E7B09F",
    },
  },
  typography: {
    fontFamily: ["Darker Grotesque", "sans-serif"].join(","),
    // fontSize: 22,
    button: {
      fontWeight: 600,
    },
  },
});