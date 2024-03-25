import { Link, Outlet } from "react-router-dom";
import { LayoutWrap, Title } from "../styles/pages/styles";

function Layout() {
  return (
    <LayoutWrap>
      <Title>
        <Link to="/">Game Box PC</Link>
      </Title>
      <Outlet />
    </LayoutWrap>
  );
}

export default Layout;
