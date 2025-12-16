import styles from "./recipe-info-element.module.css";

type RecipeInfoElementProps = {
  icon: string;
  title: string;
  content: string;
};
const RecipeInfoElement: React.FC<RecipeInfoElementProps> = ({
  title,
  content,
  icon,
}) => {
  return (
    <div className={styles.recipe_info_element_container}>
      <svg className={styles.info_icon}>
        <use href={`sprite.svg#${icon}_icon`}></use>
      </svg>
      <p className={styles.info_title}>{title}:</p>
      <p className={styles.info_content}>{content}</p>
    </div>
  );
};

export default RecipeInfoElement;
