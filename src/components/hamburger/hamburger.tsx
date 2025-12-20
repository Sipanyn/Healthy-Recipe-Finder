import useMenuStore from "../../stores/useMenuStore";
import styles from "./hamburger.module.css";

const Hamburger: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  return (
    <div {...props} className={styles.hamburger_container}>
      <svg className={styles.hamburger_icon}>
        {isMenuOpen ? (
          <use href="/sprite.svg#close_hamburger_icon"></use>
        ) : (
          <use href="/sprite.svg#hamburger_icon"></use>
        )}
      </svg>
    </div>
  );
};

export default Hamburger;
