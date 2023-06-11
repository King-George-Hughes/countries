import { useState, useEffect } from "react";
import { Countries, Loading } from "../components";
import { motion } from "framer-motion";
import { countryVariantParent } from "../lib/motion";
import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";

const HomePage = ({ darkMode }) => {
  const [loading, setLoading] = useState(true);
  const [allCountries, setAllCountries] = useState([]);

  //   Form
  const [querySearch, setQuerySearch] = useState({ search: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setQuerySearch((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(querySearch);
  };

  const searchName = "https://restcountries.com/v3.1/name/{name}?fullText=true";

  // Get All Countries
  const getAllCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region"
      );
      // const response = await fetch("https://restcountries.com/v2/all");
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
    return <Loading />;
  }

  return (
    <div
      className={`w-full min-h-screen pt-[80px] pb-20 ${
        darkMode
          ? "bg-darkModeBackground text-darkModeTextAndLightModeElements"
          : "bg-lightModeBackground text-lightModeText"
      }`}
    >
      <div className="container">
        {/* Search */}
        <div className="w-full px-[50px] my-10 md:px-0">
          <div
            className={`${
              darkMode ? "bg-darkModeElements" : "bg-white"
            } w-full h-[50px] md:w-1/3 shadow-md rounded-md flex items-center gap-5 px-5`}
          >
            <BsSearch />
            <form onSubmit={submitForm}>
              <input
                type="text"
                placeholder="Search for a country..."
                name="search"
                value={querySearch.search}
                onChange={handleChange}
                className="bg-transparent outline-none w-full"
              />
            </form>
          </div>
        </div>

        {/* Contetent */}
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
