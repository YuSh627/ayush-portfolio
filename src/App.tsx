import React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About"; // This will be updated to include experience, education, and skills
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

// Create base theme
const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
      marginBottom: 16,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: ".98rem",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16, // Replace with theme.spacing(2) if theme is accessible here
          paddingRight: 24, // Replace with theme.spacing(3) if theme is accessible here
        },
      },
    },
  },
});

// Create responsive theme
const theme = responsiveFontSizes(baseTheme);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
