import styles from "./title.module.css";
type TitleProps = {
  title: string;
  content: string;
} & React.PropsWithChildren;

const Title: React.FC<TitleProps> = ({ title, content, ...props }) => {
  return (
    <div className={styles.title_container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{content}</p>
      <div className={styles.button}>{props.children}</div>
    </div>
  );
};

export default Title;
