import { NavLink } from "react-router-dom";
import { LinkType } from "./sidebar";

type HeaderProps = {
  toggleSidebar: () => void;
};

const headerLinks: LinkType[] = [{ path: "/", label: "progress-bar" }];

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img
          src="https://www.svgrepo.com/show/385377/baby-cartoon-cute-duck.svg"
          className="header__logo"
          onClick={() => toggleSidebar()}
        />
      </header>
      <nav className="header__nav">
        <NavLink className="header__nav__link" to={"/"}>
          Home
        </NavLink>
        <NavLink className="header__nav__link" to={"/contact"}>
          Contact us
        </NavLink>
        <NavLink className="header__nav__link" to={"/animals"}>
          Animals API
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
