import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/layout/layout";
import Home from "../components/home/home";
import Recipe from "../components/recipe/recipe";
import Profile from "../components/profile/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipe", element: <Recipe /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
