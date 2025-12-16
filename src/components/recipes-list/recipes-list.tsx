import type React from "react";
import RecipeElement from "../recipe-element/recipe-element";
import styles from "./recipes-list.module.css";
import { useRecipes } from "../../hooks/useRecipes";
import Button from "../base/button/button";

const RecipesList: React.FC = () => {
  const { data: recipes, isLoading, error } = useRecipes();
  if (isLoading) {
    console.log("loading");
  }
  if (error) {
    console.log("error");
  }
  if (recipes) {
    console.log(recipes);
  }

  return (
    <div className={styles.recipes_list_container}>
      {recipes?.map((item) => (
        <RecipeElement
          key={item.id}
          title={item.title}
          des={item.des}
          cookTime={item.cookTime}
          prepTime={item.prepTime}
          servingSize={item.servingCount}
          img={item.image}
        >
          <Button variant="full_width">View Recipe</Button>
        </RecipeElement>
      ))}
    </div>
  );
};

export default RecipesList;
