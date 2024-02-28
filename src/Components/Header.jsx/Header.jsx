import { Link, Outlet, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <div className={classes.nav}>
          <ul className={classes.navbar}>
            <li>
              <Link to="/" state={{ from: location.pathname }}>
                Main
              </Link>
            </li>
            <li>
              <Link to="/users" state={{ from: location.pathname }}>
                Users
              </Link>
            </li>
            <li>
              <Link to="/posts" state={{ from: location.pathname }}>
                Post
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;