import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material";
import {unstable_ClassNameGenerator as CNG} from '@mui/material/className';

CNG.configure((componentName) => `co-${componentName}`);

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
