import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Loading } from "../components";

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
          } px-10 mt-10 py-2 inline-flex items-center gap-3 shadow-md rounded-md`}
        >
          <BsArrowLeft />
          Back
        </Link>

        <div className="w-full h-full mt-10 flex flex-col items-center justify-center md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={flags.svg} alt="" />
          </div>

          <div className="w-full md:1/2">
            <div className="w-full">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold">{name}</h2>
                <h5 className="text-sm my-1">
                  <span className="font-bold">Native Name: </span>
                  {nativeName}
                </h5>
                <h5 className="text-sm my-1">
                  <span className="font-bold">Population: </span>
                  {new Intl.NumberFormat({
                    style: "currency",
                  }).format(population)}
                </h5>
                <h5 className="text-sm my-1">
                  <span className="font-bold">Region: </span>
                  {region}
                </h5>
                <h5 className="text-sm my-1">
                  <span className="font-bold">Sub Region: </span>
                  {subregion}
                </h5>
                <h5 className="text-sm my-1">
                  <span className="font-bold">Capital: </span>
                  {capital ? capital : "NA"}
                </h5>
              </div>
              <div className="w-full md:w-1/2">
                <h5 className="text-sm my-1">
                  <span className="font-bold">Top Level Domian: </span>
                  {topLevelDomain}
                </h5>
                <h5 className="text-sm my-1">
                  <span className="font-bold">Sub Region: </span>
                  {currencies ? currencies[0].name : "NA"}
                </h5>
                <h5 className="text-sm my-1">
                  <span className="font-bold">Languages: </span>
                  {languages[0].name}
                </h5>
              </div>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  darkMode: PropTypes.bool,
};

export default Country;
