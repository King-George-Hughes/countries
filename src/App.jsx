import { useState } from "react";
import { NavBar, Layout } from "./components";
import { HomePage, Country } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <Layout>
      <Router>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route
            path="/country/:countryName"
            element={<Country darkMode={darkMode} />}
          />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
