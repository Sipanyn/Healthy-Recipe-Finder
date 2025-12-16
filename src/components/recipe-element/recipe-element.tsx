import RecipeInfoElement from "../recipe-info-element/recipe-info-element";
import styles from "./recipe-element.module.css";
type RecipeElementProps = {
  title: string;
  des: string;
  servingSize: string;
  prepTime: string;
  cookTime: string;
  img: string | undefined;
} & React.PropsWithChildren;

const RecipeElement: React.FC<RecipeElementProps> = ({
  title,
  des,
  servingSize,
  prepTime,
  cookTime,
  img,
  ...props
}) => {
  return (
    <div className={styles.recipeElement_container}>
      <div className={styles.img_container}>
        <img src={img} alt="" />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.content}>{des}</p>
      <div className={styles.recipe_info}>
        <RecipeInfoElement
          icon="person"
          title="Servings"
          content={servingSize}
        />
        <RecipeInfoElement icon="clock" title="Prep" content={prepTime} />
        <RecipeInfoElement icon="cook" title="Cook" content={cookTime} />
      </div>
      <div className={styles.button}>{props.children}</div>
    </div>
  );
};

export default RecipeElement;
