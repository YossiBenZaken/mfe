import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { unstable_ClassNameGenerator as CNG } from "@mui/material/className";
import { ThemeProvider, createTheme } from "@mui/material";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const theme = createTheme();

CNG.configure((componentName) => `au-${componentName}`);

const App = ({ onSignIn }) => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={null}>
        <Router basename="/auth">
          <Routes>
            <Route path="/signin" element={<SignIn onSignIn={onSignIn} />} />
            <Route path="/signup" element={<SignUp onSignIn={onSignIn} />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
