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
        <Button variant="text">Home</Button>
        <Button variant="text">Recipe</Button>
        <Button variant="text">Profile</Button>
      </div>
      <div className={styles.login_container}>
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
};

export default Header;
