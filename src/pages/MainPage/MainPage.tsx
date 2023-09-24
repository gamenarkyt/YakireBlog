import styles from "./MainPage.module.scss";

import { MainNews } from "../../business-component/MainNews/MainNews";
// import { MainPosts } from "../../business-component/MainPosts/MainPosts";
import { MainRoadmap } from "../../business-component/MainRoadmap/MainRoadmap";
import { Suspense, lazy } from "react";
import { MainPostsPreview } from "../../business-component/MainPosts/MainPosts.preview";

const MainPosts = lazy(
  () => import("@/business-component/MainPosts/MainPosts")
);

const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <MainNews />
      <Suspense fallback={<MainPostsPreview />}>
        <MainPosts />
      </Suspense>
      <MainRoadmap />
    </div>
  );
};

export { MainPage };
