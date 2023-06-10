import { useState, useEffect } from "react";
import { Layout } from "./components";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [allCountries, setAllCountries] = useState([]);

  // Set DarkMode
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  // Get All Countries
  const getAllCountries = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region"
    );
    const data = await response.json();
    setAllCountries(data);
    console.log(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <div className="container">
        <h1>Hello world</h1>

        <div className="w-full flex flex-col gap-10 md:flex-row md:items-center md:justify-center md:flex-wrap">
          {allCountries.map((country) => {
            return (
              <div key={country.name.common} className="w-full md:w-[250px]">
                <div className="w-full">
                  <img src={country.flags.svg} alt={country.name.common} />
                </div>
                <h2>{country.name.common}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default App;
