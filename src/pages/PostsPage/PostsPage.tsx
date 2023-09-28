import data from "@/data/posts.json";
import { useState } from "react";
import { Card } from "../../components/ui/Card/Card";
import styles from "./PostsPage.module.scss";
import { Heading } from "../../components/ui/Heading/Heading";

const PostsPage = () => {
  const [posts] = useState(data);
  return (
    <div className={styles.postspage}>
      <Heading text="All posts:" />
      <div className={styles.posts}>
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              image={post.image}
              title={post.title}
              about={post.about}
              link={post.link}
              tags={post.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;
