import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogoHandler = () => {
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <span className={styles.logo} onClick={onClickLogoHandler}>
        YakireBlog
      </span>
      <nav>
        <Link to="/posts">Posts</Link>
        <Link to="/test">Test</Link>
      </nav>
    </div>
  );
};

export { Header };
