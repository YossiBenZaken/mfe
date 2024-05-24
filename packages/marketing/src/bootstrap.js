import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Mount function to start up the app
export const mount = (el) => {
  const root = createRoot(el);
  root.render(<App history={history} />);
};

// If we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_marketing-dev-root");
  if (el) {
    mount(el);
  }
}
