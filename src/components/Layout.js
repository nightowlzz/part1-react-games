import { Link, Outlet } from "react-router-dom";
import { LayoutWrap, Title } from "../styles/pages/layout";

function Layout() {
  return (
    <LayoutWrap>
      <Title>
        <Link to="/">Game Box</Link>
      </Title>
      <Outlet />
    </LayoutWrap>
  );
}

export default Layout;
