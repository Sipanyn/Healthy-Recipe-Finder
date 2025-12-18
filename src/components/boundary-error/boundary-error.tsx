import { useNavigate } from "react-router";
import Button from "../base/button/button";
import styles from "./boundary-error.module.css";

const BoundaryError: React.FC = () => {
  const navigate = useNavigate();
  const reloadPage = (): void => {
    navigate(0);
  };
  return (
    <div className={styles.boundary_container}>
      <svg className={styles.error_icon}>
        <use href="sprite.svg#error_icon"></use>
      </svg>
      <h2 className={styles.title}>Something went wrong</h2>
      <p className={styles.contanet}>We couldn’t load this page.</p>
      <Button onClick={() => reloadPage()} variant="contained">
        Reload page
      </Button>
    </div>
  );
};

export default BoundaryError;
