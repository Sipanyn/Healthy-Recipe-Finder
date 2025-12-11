import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/layout/layout";
import Home from "../components/home/home";
import Profile from "../components/profile/profile";
import Details from "../components/details/details";
import Recipes from "../components/recipes/recipes";
import NotFound from "../components/not-found/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "recipes",
        element: <Recipes />,
      },
      { path: "/recipes/:recipeId", element: <Details /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
