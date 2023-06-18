import PropTypes from "prop-types";
import { NavBar } from ".";

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <>
      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}

      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  darkMode: PropTypes.any,
  toggleDarkMode: PropTypes.any,
};

export default Layout;
