import { BigCard } from "../../components/ui/BigCard/BigCard";
import { Button } from "../../components/ui/Button/Button";

import styles from "./MainNews.module.scss";

export const MainNews = () => {
  return (
    <div className={styles.mainnews}>
      <BigCard image="/assets/test.webp">
        <span>ArchLinux Dots update to v2!</span>
        <Button onClick={() => window.open("/post/archlinux-v2-dots")}>
          Check
        </Button>
      </BigCard>
    </div>
  );
};
