import { NavLink } from "react-router";
import styles from "./logo.module.css";

const Logo: React.FC = () => {
  return (
    <NavLink to="/">
      <div className={styles.logo_container}>
        <svg className={styles.logo_icon}>
          <use href="sprite.svg#logo_icon"></use>
        </svg>
        <p>HealthyRecipeFinder</p>
      </div>
    </NavLink>
  );
};

export default Logo;
