import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    primary: {
      main: "#3b82f6",
    },
    secondary: {
      main: "#8b5cf6",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial",
    h3: { fontSize: "clamp(1.8rem, 2.5vw, 3rem)" },
    body1: { fontSize: "clamp(0.9rem, 1vw, 1rem)" },
    body2: { fontSize: "clamp(0.8rem, 0.9vw, 0.95rem)" },
  },
});

export default darkTheme;
