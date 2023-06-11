import { useState, useEffect } from "react";
import { Countries } from "../components";
import { motion } from "framer-motion";
import { countryVariantParent } from "../lib/motion";
import PropTypes from "prop-types";

const HomePage = ({ darkMode }) => {
  const [allCountries, setAllCountries] = useState([]);

  // Get All Countries
  const getAllCountries = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region"
    );
    // const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setAllCountries(data);
    console.log(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div
      className={`w-full min-h-screen pt-[80px] pb-20 ${
        darkMode
          ? "bg-darkModeBackground text-darkModeTextAndLightModeElements"
          : "bg-lightModeBackground text-lightModeText"
      }`}
    >
      <div className="container">
        <h1>Hello world</h1>

        <motion.div
          variants={countryVariantParent}
          initial="hidden"
          animate="show"
          className="w-full px-[50px] flex flex-col gap-12 md:flex-row md:items-center md:justify-center md:flex-wrap md:px-0"
        >
          {allCountries.map((country) => {
            return (
              <Countries
                darkMode={darkMode}
                key={country.name.common}
                {...country}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  darkMode: PropTypes.bool,
};

export default HomePage;
