import type React from "react";
import styles from "./ready.module.css";
import { NavLink } from "react-router";
type ReadyProps = {
  title: string;
  content: string;
} & React.PropsWithChildren;
const Ready: React.FC<ReadyProps> = ({ title, content, ...props }) => {
  return (
    <div className={styles.ready_container}>
      {/* <img src="/images/ChatGPT Image Dec 15, 2025, 06_19_47 PM.png" alt="" /> */}
      <div className={styles.ready_content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <NavLink to="/recipes" className={styles.button}>
          {props.children}
        </NavLink>
      </div>
    </div>
  );
};

export default Ready;
