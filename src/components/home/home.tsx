import { useNavigate } from "react-router";
import Button from "../base/button/button";
import Title from "../base/title/title";
import styles from "./home.module.css";
import Banner from "../banner/banner";

import Get from "../get/get";
import Built from "../built/built";
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
      <Built
        title="Built for real life"
        first_content="Cooking should'nt be complicated.These recipes come in under 30 minutes of active time,fit busy schedules,and taste good enough to repeat."
        second_content=" Whether you're new to the kitchen or just need fresh ideas,we've got you covered."
        src="/images/A woman cutting fres.png"
      />
    </div>
  );
};

export default Home;
