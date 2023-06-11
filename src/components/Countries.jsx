import { motion } from "framer-motion";
import { countryVariant } from "../lib/motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Countries = ({ name, flags, population, region, capital, darkMode }) => {
  return (
    <Link to={`/country/${name.common}`}>
      <motion.div
        variants={countryVariant}
        key={name.common}
        className={`${
          darkMode
            ? "bg-darkModeElements text-darkModeTextAndLightModeElements"
            : "bg-white text-lightModeText"
        } w-full md:w-[250px] shadow-md rounded-md border-none`}
      >
        <div className="w-full md:h-[150px] rounded-t-md overflow-hidden relative border-none">
          <img
            src={flags.svg}
            alt={name.common}
            className="md:absolute w-full h-full md:left-0 md:right-0 md:bottom-0 md:object-cover"
          />
        </div>
        <div className="p-5">
          <h2 className="font-bold mb-2">{name.common}</h2>
          <h5 className="text-sm my-1">
            <span className="font-bold">Population: </span>
            {new Intl.NumberFormat().format(population)}
          </h5>
          <h5 className="text-sm my-1">
            <span className="font-bold">Region: </span>
            {region}
          </h5>
          <h5 className="text-sm my-1">
            <span className="font-bold">Capital: </span>
            {capital}
          </h5>
        </div>
      </motion.div>
    </Link>
  );
};

Countries.propTypes = {
  name: PropTypes.any,
  flags: PropTypes.any,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.any,
  darkMode: PropTypes.bool,
};

export default Countries;
