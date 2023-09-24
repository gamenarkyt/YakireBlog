import { MainPostsPreview } from "../../business-component/MainPosts/MainPosts.preview";
import { BigCard } from "../../components/ui/BigCard/BigCard";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import styles from "./TestPage.module.scss";

const TestPage = () => {
  return (
    <div className={styles.testpage}>
      <div className={styles.testanim}>card</div>
      <MainPostsPreview />
      <span>Test markdown library and assets file loader for blog posts:</span>
      <span>Button:</span>
      <Button width="100px" onClick={() => alert(1)}>
        Click me
      </Button>
      <span>Big Card:</span>
      <div className={styles.mainnews}>
        <BigCard image="/src/assets/2.png">
          ArchLinux dots update to v2!
          <Button onClick={() => alert(1)}>Check</Button>
        </BigCard>
      </div>
      <span>Card:</span>
      <div className={styles.testcard}>
        <Card
          title="ArchLinux dots"
          image="/src/assets/2.png"
          about="Check my dots and rice"
          tags={["android", "linux", "4pda"]}
        />
        <Card
          title="ArchLinux dots"
          image="/src/assets/2.png"
          about="Check my dots and rice"
        />
        <Card
          title="ArchLinux dots"
          image="/src/assets/2.png"
          about="Check my dots and rice"
        />
        <Card
          title="ArchLinux dots"
          image="/src/assets/2.png"
          about="Check my dots and rice"
        />
      </div>
    </div>
  );
};

export default TestPage;
