import { NavLink } from "react-router";
import Button from "../../base/button/button";
import Logo from "../../logo/logo";
import styles from "./header.module.css";
import Hamburger from "../../hamburger/hamburger";
import Menu from "../../menu/menu";
import useMenuStore from "../../../stores/useMenuStore";

const Header: React.FC = () => {
  const toggleMenu: () => void = useMenuStore((state) => state.toggleMenu);
  const isMenuOpen: boolean = useMenuStore((state) => state.isMenuOpen);
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
          to="recipes"
        >
          <Button variant="text">Recipes</Button>
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
      <div className={styles.hamburger_container}>
        <Hamburger onClick={toggleMenu} />
        <div
          className={`${styles.menu_container} ${
            isMenuOpen && styles.active_menu
          }`}
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
