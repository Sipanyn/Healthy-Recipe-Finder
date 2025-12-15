import { useNavigate } from "react-router";
import Button from "../base/button/button";
import Title from "../base/title/title";
import styles from "./home.module.css";
import Banner from "../banner/banner";

import Get from "../get/get";
const TitleEntries = {
  title: "Healthy meals, zero fuss",
  content:
    "Discover eight quick, whole-food recipes that you can cook tonight — no processed junk, no guess work",
} as const;
type TitleEntries = (typeof TitleEntries)[keyof typeof TitleEntries];

const Home: React.FC = () => {
  const navigate = useNavigate();
  function navigateToRecipes(): void {
    navigate("/recipes");
  }
  return (
    <div className={styles.home_container}>
      <Title title={TitleEntries.title} content={TitleEntries.content}>
        <Button onClick={navigateToRecipes} variant="contained">
          Start exploring
        </Button>
      </Title>
      <Banner />
      <Get />
    </div>
  );
};

export default Home;
