import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Loading } from "../components";
import { motion } from "framer-motion";
import { countryVariant, countryVariantParent } from "../lib/motion";

const Country = ({ darkMode }) => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    const fectCountryByName = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://restcountries.com/v2/name/${countryName}`
        );
        //   const response = await fetch(
        //     `https://restcountries.com/v3.1/name/${countryName}`
        //   );
        const data = await response.json();
        setLoading(false);
        setCountry(data[0]);
        console.log(data[0]);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fectCountryByName();
  }, [countryName]);

  const {
    name,
    nativeName,
    population,
    region,
    capital,
    flags,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

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
      <div className="container h-full w-full">
        <Link
          to={"/"}
          className={`${
            darkMode ? "bg-darkModeElements" : "bg-white"
          } px-10 mt-12 mb-5 py-2 inline-flex items-center gap-3 shadow-md rounded-md`}
        >
          <BsArrowLeft />
          Back
        </Link>

        <motion.div
          variants={countryVariantParent}
          initial="hidden"
          animate="show"
          className="w-full h-full mt-10 flex flex-col gap-20 items-center justify-center md:flex-row"
        >
          <motion.div variants={countryVariant} className="w-full md:w-1/2">
            <img src={flags.svg} alt="" className="w-full" />
          </motion.div>

          <div className="w-full md:w-1/2">
            <motion.h2 variants={countryVariant} className="text-3xl font-bold">
              {name}
            </motion.h2>
            <div className="w-full flex flex-col md:flex-row md:items-start mt-5 gap-5">
              <motion.div variants={countryVariant} className="w-full md:w-1/2">
                <h5 className="text-sm my-2">
                  <span className="font-bold">Native Name: </span>
                  {nativeName ? nativeName : "NA"}
                </h5>
                <h5 className="text-sm my-2">
                  <span className="font-bold">Population: </span>
                  {population
                    ? new Intl.NumberFormat({
                        style: "currency",
                      }).format(population)
                    : "NA"}
                </h5>
                <h5 className="text-sm my-2">
                  <span className="font-bold">Region: </span>
                  {region}
                </h5>
                <h5 className="text-sm my-2">
                  <span className="font-bold">Sub Region: </span>
                  {subregion ? subregion : "NA"}
                </h5>
                <h5 className="text-sm my-2">
                  <span className="font-bold">Capital: </span>
                  {capital ? capital : "NA"}
                </h5>
              </motion.div>
              <motion.div variants={countryVariant} className="w-full md:w-1/2">
                <h5 className="text-sm my-2">
                  <span className="font-bold">Top Level Domian: </span>
                  {topLevelDomain ? topLevelDomain : "NA"}
                </h5>
                <h5 className="text-sm my-2">
                  <span className="font-bold">Sub Region: </span>
                  {currencies ? currencies[0].name : "NA"}
                </h5>
                <h5 className="text-sm my-2">
                  <span className="font-bold">Languages: </span>
                  {languages ? languages[0].name : "NA"}
                </h5>
              </motion.div>
            </div>
            <div className="w-full mt-10">
              <motion.h5 variants={countryVariant} className="text-sm my-2">
                <span className="font-bold">Border Countries: </span>

                {borders
                  ? borders.map((boder) => {
                      return (
                        <span
                          className={`${
                            darkMode ? "bg-darkModeElements" : "bg-white"
                          } inline-block px-5 my-1 py-1 shadow-md mx-1 rounded-md`}
                          key={boder}
                        >
                          {boder}
                        </span>
                      );
                    })
                  : "NA"}
              </motion.h5>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

Country.propTypes = {
  darkMode: PropTypes.bool,
};

export default Country;
