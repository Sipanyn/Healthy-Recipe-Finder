import SkeletonElement from "../base/skeleton-element/skeleton-element";
import styles from "./skeleton-banner.module.css";

const SkeletonBanner = () => {
  return (
    <div className={styles.SkeletonBannerWrapper}>
      <div className={styles.SkeletonBanner}>
        <SkeletonElement type="container" />
      </div>
    </div>
  );
};

export default SkeletonBanner;
