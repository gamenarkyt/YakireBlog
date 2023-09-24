import { Heading } from "../../components/ui/Heading/Heading";
import styles from "./MainRoadmap.module.scss";

export const MainRoadmap = () => {
  return (
    <div>
      <Heading text="Roadmap" />
      <span>soon...</span>
      <img
        className={styles.soon}
        src="/assets/tea.gif"
        alt="anime girl drink tea"
      />
    </div>
  );
};
