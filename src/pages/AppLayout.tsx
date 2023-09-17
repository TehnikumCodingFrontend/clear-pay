import { Outlet } from "react-router-dom";
import { Container } from "../components/Container/Container.style";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { SCMainWrapper } from "../theme/globalStyle";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { sidebarData } from "../components/Sidebar/Sidebar.data";

export const AppLayout = () => {
  return (
    <>
      <SCMainWrapper>
        <Sidebar links={sidebarData} />
        <Container>
          <Header />
          <div style={{ padding: "50px" }}>
            <Outlet />
          </div>
        </Container>
      </SCMainWrapper>
      <Footer />
    </>
  );
};
