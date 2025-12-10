import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <svg className={styles.logo_icon}>
        <use href="sprite.svg#logo_icon"></use>
      </svg>
      <p>HealthyRecipeFinder</p>
    </div>
  );
};

export default Logo;
