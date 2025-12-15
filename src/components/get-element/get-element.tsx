import styles from "./get-element.module.css";
type GetElementProps = {
  title: string;
  content: string;
  icon: string;
};
const GetElement: React.FC<GetElementProps> = ({ title, content, icon }) => {
  return (
    <div className={styles.get_element_container}>
      <div className={styles.title_icon}>
        <svg className={styles.icon}>
          <use href={`sprite.svg#${icon}_icon`}></use>
        </svg>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default GetElement;
