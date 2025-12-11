// import styles from "./details.module.css";

import { useParams } from "react-router";

const Details: React.FC = () => {
  const { recipeId } = useParams();
  return <div>details:{recipeId}</div>;
};

export default Details;
