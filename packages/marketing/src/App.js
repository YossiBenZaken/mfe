import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {unstable_ClassNameGenerator as CNG} from '@mui/material/className';
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

CNG.configure((componentName) => `ma-${componentName}`);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
