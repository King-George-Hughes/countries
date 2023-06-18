import { useState, useEffect } from "react";
import {
  Countries,
  Loading,
  SearchInput,
  FilterCountry,
  Layout,
} from "../components";
import { motion } from "framer-motion";
import { countryVariantParent } from "../lib/motion";
import PropTypes from "prop-types";

const HomePage = ({ darkMode }) => {
  const [loading, setLoading] = useState(true);

  // All Countries
  const [allCountries, setAllCountries] = useState([]);

  // For Search
  const [searchInput, setSearchInput] = useState("");
  const [onSearch, setOnSearch] = useState([]);

  // Get All Countries
  const getAllCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region"
      );
      const data = await response.json();
      setLoading(false);
      setAllCountries(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  if (loading) {
    return <Loading darkMode={darkMode} />;
  }

  return (
    <Layout>
      <div
        className={`w-full min-h-screen pt-[80px] pb-20 ${
          darkMode
            ? "bg-darkModeBackground text-darkModeTextAndLightModeElements"
            : "bg-lightModeBackground text-lightModeText"
        }`}
      >
        <div className="container">
          {/* Search */}
          <div className="w-full px-[50px] my-10 flex flex-col gap-10 md:flex-row md:justify-between md:px-0">
            {/* <SearchInput darkMode={darkMode} onSearch={getCountryByName} /> */}
            <SearchInput
              darkMode={darkMode}
              allCountries={allCountries}
              setSearchInput={setSearchInput}
              searchInput={searchInput}
              setOnSearch={setOnSearch}
            />
            <FilterCountry
              darkMode={darkMode}
              setLoading={setLoading}
              setAllCountries={setAllCountries}
              // onSelect={getCountryByRegion}
            />
          </div>

          {/* Contetent */}
          <motion.div
            variants={countryVariantParent}
            initial="hidden"
            animate="show"
            className="w-full px-[50px] flex flex-col gap-12 md:flex-row md:items-center md:justify-evenly md:flex-wrap md:px-0"
          >
            {searchInput.length > 1
              ? onSearch.map((country) => {
                  return (
                    <Countries
                      darkMode={darkMode}
                      key={country.name.common}
                      {...country}
                    />
                  );
                })
              : allCountries.map((country) => {
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
    </Layout>
  );
};

HomePage.propTypes = {
  darkMode: PropTypes.bool,
};

export default HomePage;
