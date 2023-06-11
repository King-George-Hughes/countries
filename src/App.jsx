import { useState } from "react";
import { NavBar, Loading } from "./components";
import { HomePage, Country } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <Router>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route
          path="/country/:countryName"
          element={<Country darkMode={darkMode} />}
        />
        <Route path="/loading" element={<Loading darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
