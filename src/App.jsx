import { useState } from "react";
import { NavBar, Layout } from "./components";
import { HomePage, Country } from "./pages";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  console.log(darkMode);

  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route index element={<HomePage darkMode={darkMode} />} />
        <Route
          path="/country/:countryName"
          element={<Country darkMode={darkMode} />}
        />
      </Routes>
    </>
  );
  // return (
  //   <Layout>
  //     <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

  //     <Routes>
  //       {/* <Route path="/" element={<Layout />} /> */}
  //       <Route index element={<HomePage darkMode={darkMode} />} />
  //       <Route
  //         path="/country/:countryName"
  //         element={<Country darkMode={darkMode} />}
  //       />
  //     </Routes>
  //   </Layout>
  // );
}

export default App;
