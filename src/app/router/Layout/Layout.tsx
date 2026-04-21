import { Header } from "@/widgets/header/ui/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { Wrapper } from "@/shared/ui/Wrapper";
const Layout = () => (
  <>
    <div className={styles.layout}>
      <Header />
      <Wrapper>
        <main>
          <Outlet />
        </main>
      </Wrapper>
    </div>
  </>
);
export default Layout;
