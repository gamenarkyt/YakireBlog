import { Heading } from "../../components/ui/Heading/Heading";
import data from "@/data/roadmap.json";
import styles from "./MainRoadmap.module.scss";
import { useState } from "react";

// @ts-ignore
const sort = (arr) => {
  const next = [...arr];
  next.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  });
  return next;
};

export const MainRoadmap = () => {
  const [roadmap] = useState(sort(data));

  return (
    <div className={styles.mainroadmap}>
      <Heading text="Roadmap" />
      <div className={styles.roadmap}>
        {roadmap.map((stage) => {
          return (
            <div className={styles.stage} key={stage.id}>
              <img
                src={stage.image}
                alt="stage image"
                className={styles.image}
              />
              <span className={styles.name}>{stage.name}</span>
              <span className={styles.date}>{stage.date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
