import styles from "./skeleton-element.module.css";
type SkeletonElementProps = {
  type: string;
};
const SkeletonElement: React.FC<SkeletonElementProps> = ({ type }) => {
  return <div className={`${styles.SkeletonElement} ${styles[type]}`}></div>;
};

export default SkeletonElement;
