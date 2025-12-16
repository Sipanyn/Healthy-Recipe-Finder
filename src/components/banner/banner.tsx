import { useState } from "react";
import SkeletonBanner from "../skeleton-banner/skeleton-banner";
import styles from "./banner.module.css";

const Banner: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles.banner_container}>
      {!loaded && <SkeletonBanner />}
      <img
        onLoad={() => setLoaded(true)}
        src="/images/A woman cooking heal.png"
        alt="banner_image"
      />
    </div>
  );
};

export default Banner;
