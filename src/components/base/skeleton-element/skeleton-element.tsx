import styles from "./skeleton-element.module.css";

type SkeletonElementProps = {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  image?: boolean;
};
const SkeletonElement: React.FC<SkeletonElementProps> = ({
  width = "100%",
  height = "1rem",
  borderRadius = "4px",
  image = false,
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
      }}
      className={`${styles.SkeletonElement}`}
    >
      {image && (
        <svg className={styles.loadingImage_icon}>
          <use href="sprite.svg#loadingImage_icon"></use>
        </svg>
      )}
    </div>
  );
};

export default SkeletonElement;
