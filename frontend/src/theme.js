import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#E7B09F",
    },
    secondary: {
      main: "#e57373",
    },
  },
  typography: {
    fontFamily: ["Darker Grotesque", "sans-serif"].join(","),
    fontSize: 16,
    button: {
      fontWeight: 700,
    },
  },
});
