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

  const selectRegionName = (e) => {
    const filterBtn = document.querySelector(".filter_btn");
    let filterValue = `${e.target.dataset.region}`;
    filterBtn.textContent = filterValue;
    // const regionName = e.target.value;
    onSelect(filterValue);
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-darkModeElements text-darkModeTextAndLightModeElements"
          : "bg-white text-lightModeInput"
      } w-1/2 h-[50px] md:w-1/6 shadow-md rounded-md flex items-center gap-5 px-5 outline-none relative`}
      onMouseEnter={() =>
        setShowFilterMenu((prevState) => {
          if (prevState === false) return true;
          else return false;
        })
      }
    >
      <button className="filter_btn">Filter By Region</button>
      {showFilterMenu && (
        <div
          className={`${
            darkMode
              ? "bg-darkModeElements text-darkModeTextAndLightModeElements"
              : "bg-white text-lightModeInput"
          } absolute w-full top-[52px] left-0 flex flex-col items-start z-30 rounded-md shadow-md py-3 px-5 cursor-pointer`}
        >
          {allRegions.map((region) => {
            return (
              <div
                data-region={region.region}
                key={region.region}
                className="my-1"
                onClick={selectRegionName}
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
  onSelect: PropTypes.any,
};

export default FilterCountry;
