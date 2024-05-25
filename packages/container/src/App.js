import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";
import { ThemeProvider, createTheme } from "@mui/material";
import { unstable_ClassNameGenerator as CNG } from "@mui/material/className";

CNG.configure((componentName) => `co-${componentName}`);

const theme = createTheme();

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/AuthApp"));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="">
        <Header />
        <Suspense fallback={<Progress />}>
          <div>
            <Routes>
              <Route path="/auth/*" element={<AuthApp />} />
              <Route path="/*" element={<MarketingApp />} />
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
