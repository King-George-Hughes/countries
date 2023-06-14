import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";

const SearchInput = ({
  darkMode,
  allCountries,
  setOnSearch,
  setSearchInput,
  searchInput,
}) => {
  // Get Country by Name
  const searchCountry = (searchData) => {
    setSearchInput(searchData);

    if (searchInput) {
      const searchingCountry = allCountries.filter((country) =>
        Object.values(country.name.common)
          .join("")
          .toLowerCase()
          .includes(searchData.toLowerCase())
      );
      console.log(searchingCountry);
      setOnSearch(searchingCountry);
    } else {
      setOnSearch(allCountries);
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-darkModeElements" : "bg-white"
      } w-full h-[50px] md:w-1/3 shadow-md rounded-md flex items-center gap-5 px-5`}
    >
      <BsSearch />
      <form>
        <input
          type="text"
          placeholder="Search for a country..."
          name="search"
          value={searchInput}
          onChange={(e) => searchCountry(e.target.value)}
          className="bg-transparent outline-none w-full"
        />
      </form>
    </div>
  );
};

SearchInput.propTypes = {
  darkMode: PropTypes.any,
  allCountries: PropTypes.any,
  setOnSearch: PropTypes.any,
  setSearchInput: PropTypes.any,
  searchInput: PropTypes.any,
};

export default SearchInput;
