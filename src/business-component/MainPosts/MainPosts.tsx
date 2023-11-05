import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Heading } from "../../components/ui/Heading/Heading";
import data from "@/data/posts.json";
import { useMemo, useState } from "react";

import styles from "./MainPosts.module.scss";
import { sortPosts } from "../../utils/sortPosts";

const MainPosts = () => {
  const rawPosts = data;
  let [sorttype, setsorttype] = useState<"abs" | "tag">("abs") || "";
  const posts = useMemo(
    () => sortPosts(rawPosts, sorttype),
    [rawPosts, sorttype]
  );

  const sortByAbs = () => {
    setsorttype("abs");
  };
  const sortByTag = () => {
    setsorttype("tag");
  };

  return (
    <div>
      <Heading text="Posts">
        <span>Sort: </span>
        <Button onClick={sortByAbs}>abs</Button>
        <Button onClick={sortByTag}>tag</Button>
      </Heading>
      <div className={styles.posts}>
        {posts.map((post, index) => {
          if (index >= 4) {
            return null;
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
