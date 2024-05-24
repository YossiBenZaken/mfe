import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Mount function to start up the app
const root = createRoot(document.getElementById("root"));
root.render(<App />);