import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Heading } from "../../components/ui/Heading/Heading";
import data from "@/data/data.json";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { useState } from "react";

import styles from "./MainPosts.module.scss";

const MainPosts = () => {
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
    <div>
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
    </div>
  );
};

export default MainPosts;
