import { NavLink } from "react-router";
import styles from "./menu-list-item.module.css";
type MenuProps = {
  variant: "link" | "button";
  route: "home" | "recipes" | "profile" | "login";
} & React.PropsWithChildren &
  React.LiHTMLAttributes<HTMLElement>;
const MenuListItem: React.FC<MenuProps> = ({ variant, route, ...props }) => {
  if (variant === "link") {
    return (
      <li className={styles.item_container}>
        {route === "home" && (
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            {...props}
            to="/"
            end
          >
            <svg className={styles.left_icon}>
              <use href="sprite.svg#left_icon"></use>
            </svg>
            <p className={styles.content}>{props.children}</p>
          </NavLink>
        )}
        {route === "login" && (
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            {...props}
            to="/login"
          >
            <svg className={styles.left_icon}>
              <use href="sprite.svg#left_icon"></use>
            </svg>
            <p className={styles.content}>{props.children}</p>
          </NavLink>
        )}
        {route === "profile" && (
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            {...props}
            to="/profile"
          >
            <svg className={styles.left_icon}>
              <use href="sprite.svg#left_icon"></use>
            </svg>
            <p className={styles.content}>{props.children}</p>
          </NavLink>
        )}
        {route === "recipes" && (
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            {...props}
            to="/recipes"
          >
            <svg className={styles.left_icon}>
              <use href="sprite.svg#left_icon"></use>
            </svg>
            <p className={styles.content}>{props.children}</p>
          </NavLink>
        )}
      </li>
    );
  }
};

export default MenuListItem;
