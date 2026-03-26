import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Health } from "./pages/Health";
import { Service } from "./pages/Service";
import { Activity } from "./pages/Activity";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "health", Component: Health },
      { path: "service", Component: Service },
      { path: "activity", Component: Activity },
      { path: "profile", Component: Profile },
    ],
  },
]);
