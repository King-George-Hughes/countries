import PropTypes from "prop-types";
import { useState } from "react";

const FilterCountry = ({ darkMode, setAllCountries, setLoading }) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const regions = [
    {
      region: "Africa",
    },
    {
      region: "Americas",
    },
    {
      region: "Antarctic",
    },
    {
      region: "Asia",
    },
    {
      region: "Europe",
    },
    {
      region: "Oceania",
    },
  ];

  //   Get Country by Region
  const getCountryByRegion = async (regionName) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${regionName}`
      );
      const data = await response.json();
      setLoading(false);
      setAllCountries(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const selectRegion = (e) => {
    const filterBtn = document.querySelector(".filter_btn");
    let filterValue = `${e.target.dataset.region}`;
    filterBtn.textContent = filterValue;
    getCountryByRegion(filterValue);
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-darkModeElements text-darkModeTextAndLightModeElements"
          : "bg-white text-lightModeInput"
      } w-1/2 h-[50px] md:w-1/6 shadow-md rounded-md flex items-center gap-5 px-5 outline-none relative`}
      onClick={() => setShowFilterMenu((prevState) => !prevState)}
    >
      <button className="filter_btn">Filter By Region</button>
      {showFilterMenu && (
        <div
          className={`${
            darkMode
              ? "bg-darkModeElements text-darkModeTextAndLightModeElements"
              : "bg-white text-lightModeInput"
          } absolute w-full top-[55px] left-0 flex flex-col items-start z-30 rounded-md shadow-md py-3 px-5 cursor-pointer`}
        >
          {regions.map((region) => {
            return (
              <div
                data-region={region.region}
                key={region.region}
                className="my-1"
                onClick={selectRegion}
              >
                {region.region}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

FilterCountry.propTypes = {
  darkMode: PropTypes.any,
  setAllCountries: PropTypes.any,
  setLoading: PropTypes.any,
};

export default FilterCountry;
