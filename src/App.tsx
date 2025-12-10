import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout/layout/layout";
import Home from "./components/home/home";
import Recipe from "./components/recipe/recipe";
import Profile from "./components/profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
