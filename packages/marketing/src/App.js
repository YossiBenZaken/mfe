import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { unstable_ClassNameGenerator as CNG } from "@mui/material/className";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

CNG.configure((componentName) => `ma-${componentName}`);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={null}>
        <Router basename="/marketing">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
