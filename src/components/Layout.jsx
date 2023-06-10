import { NavBar } from ".";
import propTypes from "prop-types";

const Layout = ({ darkMode, toggleDarkMode, children }) => {
  return (
    <div className="font-nintendo_sans">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  darkMode: propTypes.bool,
  toggleDarkMode: propTypes.any,
  children: propTypes.any,
};

export default Layout;
