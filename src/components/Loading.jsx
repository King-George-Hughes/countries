import PropTypes from "prop-types";

const Loading = ({ darkMode }) => {
  // console.log(darkMode);

  return (
    <div
      className={`w-full min-h-screen pt-[80px] pb-20 flex items-center justify-center ${
        darkMode
          ? "bg-darkModeBackground text-darkModeTextAndLightModeElements"
          : "bg-lightModeBackground text-lightModeText"
      }`}
    >
      <h1 className="text-3xl md:text-5xl">Loading...</h1>
    </div>
  );
};

Loading.propTypes = {
  darkMode: PropTypes.any,
};

export default Loading;
