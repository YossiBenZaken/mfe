import {createApp} from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
export const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dashboard-dev-root");
  if (el) {
    mount(el);
  }
}
