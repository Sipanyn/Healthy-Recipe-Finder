import styles from "./details.module.css";
import { useParams } from "react-router";

import { useRecipe } from "../../hooks/useRecipe";
import Loading from "../loading/loading";
import BoundaryError from "../boundary-error/boundary-error";
import RecipeInfoElement from "../recipe-info-element/recipe-info-element";

const Details: React.FC = () => {
  const { recipeId } = useParams();
  const { data: recipe, isLoading, isError } = useRecipe(recipeId);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <BoundaryError></BoundaryError>;
  }
  return (
    <div className={styles.details_container}>
      <div className={styles.img_container}>
        <img src={recipe?.image} alt="recipe_img" />
      </div>
      <h2 className={styles.title}>{recipe?.title}</h2>
      <p className={styles.content}>{recipe?.des}</p>
      <p className={styles.ingredients_title}>Ingredients:</p>
      <ul className={styles.ingredients}>
        {recipe?.ingredients.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <p className={styles.dressing_title}>Dressing:</p>
      <ul className={styles.dressing}>
        {recipe?.dressing.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <p className={styles.steps_title}>Steps:</p>
      <ul className={styles.steps}>
        {recipe?.steps.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <div className={styles.recipe_info}>
        <RecipeInfoElement
          icon="person"
          title="Servings"
          // content={servingSize}
          content="2"
        />
        <RecipeInfoElement icon="clock" title="Prep" content="3" />
        <RecipeInfoElement icon="cook" title="Cook" content="3" />
      </div>
    </div>
  );
};

export default Details;
