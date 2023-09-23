import { useState } from "react";
import { BigCard } from "../../components/ui/BigCard/BigCard";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Heading } from "../../components/ui/Heading/Heading";
import styles from "./MainPage.module.scss";

import data from "@/data/data.json";
import { useMatchMedia } from "../../hooks/useMatchMedia";

const MainPage = () => {
  const [posts, setPosts] = useState(data);
  const { isMobile, isDesktop, isTablet } = useMatchMedia();

  const sortNormal = () => {
    setPosts(data);
  };

  const sortByAbs = () => {
    const next = [...posts];
    next.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    setPosts(next);
  };

  const sortByTag = () => {
    const next = [...posts];
    next.sort((a, b) => {
      if (a.tags[0] < b.tags[0]) {
        return -1;
      }
      if (a.tags[0] > b.tags[0]) {
        return 1;
      }
      return 0;
    });

    setPosts(next);
  };

  return (
    <div className={styles.mainpage}>
      <span>start refactoring</span>
      {/* Main News Card */}
      <div className={styles.mainnews}>
        <BigCard image="/assets/test.png">
          <span>ArchLinux Dots update to v2!</span>
          <Button
            onClick={() => window.open("https://github.com/gamenarkyt/.dots")}
          >
            Check
          </Button>
        </BigCard>
      </div>
      {/* Posts */}
      <Heading text="Posts">
        <span>Sort: </span>
        <Button onClick={sortNormal}>normal</Button>
        <Button onClick={sortByAbs}>abs</Button>
        <Button onClick={sortByTag}>tag</Button>
      </Heading>
      <div className={styles.posts}>
        {posts.map((post, index) => {
          if (isMobile) {
            if (index >= 4) {
              return null;
            }
          }
          if (isDesktop) {
            if (index >= 8) {
              return null;
            }
          }

          if (isTablet) {
            if (index >= 6) {
              return null;
            }
          }

          return (
            <Card
              key={post.id}
              image={post.image}
              title={post.title}
              about={post.about}
              tags={post.tags}
              link={post.link}
            />
          );
        })}
      </div>
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

export { MainPage };
