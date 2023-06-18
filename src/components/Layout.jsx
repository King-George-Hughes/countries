import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}

      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
