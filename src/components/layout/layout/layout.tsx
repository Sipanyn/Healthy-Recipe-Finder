import type React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./layout.module.css";

const Layout: React.FC = () => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <p>main</p>
      <Footer />
    </div>
  );
};

export default Layout;
