import React, { Suspense, useState, lazy, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";
import { ThemeProvider, createTheme } from "@mui/material";
import { unstable_ClassNameGenerator as CNG } from "@mui/material/className";
import { RequireAuth } from "./middleware/RequireAuth";

CNG.configure((componentName) => `co-${componentName}`);

const theme = createTheme();

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="">
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <div>
            <Routes>
              <Route
                path="/auth/*"
                element={<AuthLazy onSignIn={() => setIsSignedIn(true)} isSignedIn={isSignedIn}/>}
              />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth isSignedIn={isSignedIn}>
                    <DashboardLazy />
                  </RequireAuth>
                }
              />
              <Route path="/*" element={<MarketingLazy />} />
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
