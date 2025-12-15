import useMenuStore from "../../stores/useMenuStore";
import MenuListItem from "../menu-list-item/menu-list-item";
import styles from "./menu.module.css";

const Menu: React.FC = () => {
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  return (
    <ul className={styles.menu_container}>
      <MenuListItem onClick={toggleMenu} route="home" variant="link">
        Home
      </MenuListItem>
      <MenuListItem onClick={toggleMenu} route="recipes" variant="link">
        Recipes
      </MenuListItem>
      <MenuListItem onClick={toggleMenu} route="profile" variant="link">
        Profile
      </MenuListItem>
      <MenuListItem onClick={toggleMenu} route="login" variant="link">
        Login
      </MenuListItem>
    </ul>
  );
};

export default Menu;
