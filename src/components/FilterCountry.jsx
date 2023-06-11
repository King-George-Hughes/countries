import PropTypes from "prop-types";

const FilterCountry = ({ darkMode, onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <select onChange={selectHandler}>
      <option className="option">Filter by Region</option>
      <option className="option" value="Africa">
        Africa
      </option>
      <option className="option" value="America">
        America
      </option>
      <option className="option" value="Asia">
        Asia
      </option>
      <option className="option" value="Europe">
        Europe
      </option>
      <option className="option" value="Oceania">
        Oceania
      </option>
    </select>
  );
};

FilterCountry.propTypes = {
  darkMode: PropTypes.any,
  onSearch: PropTypes.any,
};

export default FilterCountry;
