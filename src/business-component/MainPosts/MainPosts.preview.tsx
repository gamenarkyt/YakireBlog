import data from "@/data/data.json";
import { useState } from "react";
import styles from "./MainPosts.module.scss";

export const MainPostsPreview = () => {
  const [posts] = useState(data);

  return (
    <div className={styles.posts}>
      {posts.map((_) => {
        return (
          <div
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
