import { useNavigate } from "react-router";
import Button from "../base/button/button";
import styles from "./not-found.module.css";
import type { PropsWithChildren } from "react";

const NotFound: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  function navigateToHome(): void {
    if (children === "home") {
      navigate("/");
    }
    if (children === "recipes") {
      navigate("/recipes");
    }
  }
  return (
    <div className={styles.notFound_container}>
      <svg className={styles.sad_icon}>
        <use href="sprite.svg#sad_icon"></use>
      </svg>
      <h3 className={styles.title}>Nothing was found here...</h3>
      <Button onClick={navigateToHome} variant="contained">
        Back to {children}
      </Button>
    </div>
  );
};

export default NotFound;
