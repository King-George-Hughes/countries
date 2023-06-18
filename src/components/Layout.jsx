import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <>{children}</>;
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
