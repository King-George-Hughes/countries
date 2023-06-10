import { Link } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import propTypes from "prop-types";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`${
        darkMode ? "bg-darkModeElements " : "bg-white"
      } " w-full h-[65px] p-2 shadow-lg`}
    >
      <div
        className={`${
          darkMode
            ? "text-darkModeTextAndLightModeElements"
            : "text-lightModeText"
        } container w-full h-full flex items-center justify-between`}
      >
        <Link to="/" className="font-bold text-xl">
          Where in the world?
        </Link>
        <div
          className="flex items-center gap-2 font-medium cursor-pointer"
          onClick={toggleDarkMode}
        >
          <BsMoon />
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  darkMode: propTypes.bool,
  toggleDarkMode: propTypes.any,
};

export default NavBar;
