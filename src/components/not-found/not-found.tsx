import { useNavigate } from "react-router";
import Button from "../base/button/button";
import styles from "./not-found.module.css";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  function navigateToHome(): void {
    navigate("/");
  }
  return (
    <div className={styles.notFound_container}>
      <svg className={styles.sad_icon}>
        <use href="sprite.svg#sad_icon"></use>
      </svg>
      <h3 className={styles.title}>Nothing was found here...</h3>
      <Button onClick={navigateToHome} variant="contained">
        Back to home
      </Button>
    </div>
  );
};

export default NotFound;
