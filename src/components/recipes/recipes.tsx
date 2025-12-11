import Title from "../base/title/title";
import styles from "./recipes.module.css";

// import { useNavigate } from "react-router";

const Recipes: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <div className={styles.recipes_component}>
      <Title
        title="Explore our simple,healthy recipes"
        content="Discover eight quick,whole-food dishes that fit real -life schedules and taste amazing.Use search bar to find a recipe by name or ingrredient,or simply scrollthe list and let something delicious catch your eye."
      ></Title>
    </div>
  );
};

export default Recipes;
