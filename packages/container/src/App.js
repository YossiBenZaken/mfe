import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material";
import { unstable_ClassNameGenerator as CNG } from "@mui/material/className";

CNG.configure((componentName) => `co-${componentName}`);

const theme = createTheme();

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={null}>
        <BrowserRouter basename="">
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/marketing" replace/>} />
              <Route path="/marketing" element={<MarketingApp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}
