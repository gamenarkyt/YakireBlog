import data from "@/data/posts.json";
import { useState } from "react";
import styles from "./MainPosts.module.scss";
import { Heading } from "../../components/ui/Heading/Heading";

export const MainPostsPreview = () => {
  const [posts] = useState(data.slice(0, 4));

  return (
    <div className={styles.posts}>
      <Heading text="Posts" />
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            style={{
              height: "340px",
              border: "var(--border)",
              borderRadius: "var(--border-radius)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "60%",
                animation: "var(--skeleton)",
                borderRadius: "var(--border-radius)",
              }}
            ></div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  width: "60%",
                  height: "25px",
                  borderRadius: "var(--border-radius)",
                  animation: "var(--skeleton)",
                  marginTop: "15px",
                }}
              ></span>
              <span
                style={{
                  width: "80%",
                  height: "25px",
                  borderRadius: "var(--border-radius)",
                  animation: "var(--skeleton)",
                  marginTop: "10px",
                }}
              ></span>
            </div>
            <div
              style={{
                width: "100%",
                height: "60px",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "25px",
                  animation: "var(--skeleton)",
                  borderRadius: "var(--border-radius)",
                }}
              ></div>
              <div
                style={{
                  width: "80px",
                  height: "25px",
                  animation: "var(--skeleton)",
                  borderRadius: "var(--border-radius)",
                }}
              ></div>
              <div
                style={{
                  width: "80px",
                  height: "25px",
                  animation: "var(--skeleton)",
                  borderRadius: "var(--border-radius)",
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
