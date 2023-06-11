import PropTypes from "prop-types";
import { useState } from "react";

const FilterCountry = ({ darkMode, onSelect }) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const allRegions = [
    {
      region: "Africa",
    },
    {
      region: "Americas",
    },
    {
      region: "Antartic",
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

  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <div
      onChange={selectHandler}
      className={`${
        darkMode
          ? "bg-darkModeElements text-darkModeTextAndLightModeElements"
          : "bg-white text-lightModeInput"
      } w-1/2 h-[50px] md:w-1/6 shadow-md rounded-md flex items-center gap-5 px-5 outline-none relative`}
      onMouseEnter={() => setShowFilterMenu(true)}
      onMouseLeave={() => setShowFilterMenu(false)}
    >
      <div>Filter By Region</div>
      {showFilterMenu && (
        <div
          className={`${
            darkMode
              ? "bg-darkModeElements text-darkModeTextAndLightModeElements"
              : "bg-white text-lightModeInput"
          } absolute w-full top-[52px] left-0 flex flex-col items-start z-30 rounded-md shadow-md py-3 px-5`}
        >
          {allRegions.map((region) => {
            return (
              <button
                value={region.region}
                key={region.region}
                className="my-1"
              >
                {region.region}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

FilterCountry.propTypes = {
  darkMode: PropTypes.any,
  onSelect: PropTypes.any,
};

export default FilterCountry;
