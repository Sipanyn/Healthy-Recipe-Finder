import type React from "react";
import styles from "./built.module.css";
import { useState } from "react";
import SkeletonElement from "../base/skeleton-element/skeleton-element";
type BuiltProps = {
  title: string;
  first_content: string;
  second_content: string;
  src: string;
};
const Built: React.FC<BuiltProps> = ({
  title,
  first_content,
  second_content,
  src,
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles.built_container}>
      <div className={styles.title_content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.contents}>
          <p className={styles.first_content}>{first_content}</p>
          <p className={styles.second_content}>{second_content}</p>
        </div>
      </div>
      <div className={styles.image_container}>
        {!loaded && <SkeletonElement height={"100%"} image={true} />}
        <img
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? "block" : "none" }}
          src={src}
          alt="built_image"
        />
      </div>
    </div>
  );
};

export default Built;
