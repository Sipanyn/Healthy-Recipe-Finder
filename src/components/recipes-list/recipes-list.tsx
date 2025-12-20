import type React from "react";
import RecipeElement from "../recipe-element/recipe-element";
import styles from "./recipes-list.module.css";
import { useRecipes } from "../../hooks/useRecipes";
import Button from "../base/button/button";
import Loading from "../loading/loading";
import { useNavigate } from "react-router";

const RecipesList: React.FC = () => {
  const navigate = useNavigate();

  const { data: recipes, isLoading } = useRecipes();
  if (isLoading) {
    return (
      <div className={styles.recipes_list_loading}>
        <Loading />
      </div>
    );
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
          <Button
            onClick={() => navigate(`/recipes/${item.id}`)}
            variant="full_width"
          >
            View Recipe
          </Button>
        </RecipeElement>
      ))}
    </div>
  );
};

export default RecipesList;
