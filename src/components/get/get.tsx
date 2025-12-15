import GetElement from "../get-element/get-element";
import styles from "./get.module.css";

const Get = () => {
  return (
    <div className={styles.get_container}>
      <h2 className={styles.title}>What you'll get</h2>
      <GetElement
        icon="carrot"
        title="Whole-food recipes"
        content="Each dish uses everyday,unprocessed ingredients."
      />
      <GetElement
        icon="minumum"
        title="Minimum fuss"
        content="All reciepes are designed to make eating healthy quick and easy."
      />
      <GetElement
        icon="search"
        title="Search in seconds"
        content="Filter by name or ingredient and jump straight to the recipe you need."
      />
    </div>
  );
};

export default Get;
