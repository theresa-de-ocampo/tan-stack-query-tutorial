import { NavLink, Outlet } from "react-router-dom";

// * Constants
import ROUTES from "../../common/constants/routes";

export default function Menu() {
  return (
    <>
      <aside>
        <nav>
          <NavLink to={ROUTES.OVERVIEW}>Overview</NavLink>
          <NavLink to={ROUTES.INFINITE_SCROLL}>Infinite Scroll</NavLink>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}
