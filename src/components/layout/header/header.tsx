import { NavLink } from "react-router";
import Button from "../../base/button/button";
import Logo from "../../logo/logo";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container}>
        <Logo />
      </div>
      <div className={styles.links_container}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/"
          end
        >
          <Button variant="text">Home</Button>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="recipe"
        >
          <Button variant="text">Recipe</Button>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="profile"
        >
          <Button variant="text">Profile</Button>
        </NavLink>
      </div>
      <div className={styles.login_container}>
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
};

export default Header;
