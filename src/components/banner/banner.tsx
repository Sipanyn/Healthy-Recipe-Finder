import { useState } from "react";
import styles from "./banner.module.css";
import SkeletonElement from "../base/skeleton-element/skeleton-element";

const Banner: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles.banner_container}>
      {!loaded && <SkeletonElement height="100%" image={true} />}
      <img
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? "block" : "none" }}
        src="/images/A woman cooking heal.png"
        alt="banner_image"
      />
    </div>
  );
};

export default Banner;
