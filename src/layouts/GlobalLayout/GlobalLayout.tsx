import { Outlet } from "react-router-dom";

import { Header } from "@/components/Header/Header";
import styles from "./GlobalLayout.module.scss";
import { Footer } from "../../components/Footer/Footer";

const GlobalLayout = () => {
  return (
    <div className={styles.globallayout}>
      <Header />
      <main>
        {/* <SideBar /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { GlobalLayout };
