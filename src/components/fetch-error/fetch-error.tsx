import { refetchRecipes } from "../../hooks/refetchRecipes";
import Button from "../base/button/button";
import styles from "./fetch-error.module.css";

const FetchError: React.FC = () => {
  return (
    <div className={styles.error_container}>
      <svg className={styles.error_icon}>
        <use href="sprite.svg#error_icon"></use>
      </svg>
      <p className={styles.title}> Some errors happened,please try again.</p>
      <Button onClick={() => refetchRecipes()} variant="contained">
        Try again
      </Button>
    </div>
  );
};

export default FetchError;
