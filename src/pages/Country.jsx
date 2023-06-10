import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    // fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    fetch(`https://restcountries.com/v2/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        // console.log(data[0].name.common);
      });
  }, [countryName]);

  console.log(country);

  return (
    <div>
      <h3>{countryName}</h3>
      <h2>{country.name}</h2>
    </div>
  );
};

export default Country;
