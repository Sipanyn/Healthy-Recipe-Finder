import { useEffect } from "react";
import Title from "../base/title/title";
import RecipesList from "../recipes-list/recipes-list";
import styles from "./recipes.module.css";
import { useRecipes } from "../../hooks/useRecipes";
import FetchError from "../fetch-error/fetch-error";

const TitleEntries = {
  title: "Explore our simple,healthy recipes",
  content:
    "Discover eight quick,whole-food dishes that fit real -life schedules and taste amazing.Use search bar to find a recipe by name or ingrredient,or simply scrollthe list and let something delicious catch your eye.",
} as const;
type TitleEntries = (typeof TitleEntries)[keyof typeof TitleEntries];
const Recipes: React.FC = () => {
  const { error } = useRecipes();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  if (error) {
    return (
      <div className={styles.recipes_error}>
        <FetchError />
      </div>
    );
  }
  return (
    <div className={styles.recipes_component}>
      <Title title={TitleEntries.title} content={TitleEntries.content}></Title>
      <RecipesList />
    </div>
  );
};

export default Recipes;
