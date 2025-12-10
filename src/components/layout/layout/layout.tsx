import type React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./layout.module.css";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
