import { Header } from "@/widgets/header/ui/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
const Layout = () => (
  <>
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  </>
);
export default Layout;
