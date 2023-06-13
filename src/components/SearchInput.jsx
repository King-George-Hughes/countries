import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";

const SearchInput = ({ darkMode, searchCountry, searchInput }) => {
  // const [input, setInput] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   onSearch(input);
  // };

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
  searchCountry: PropTypes.any,
  searchInput: PropTypes.any,
};

export default SearchInput;

// import { useState } from "react";
// import { BsSearch } from "react-icons/bs";
// import PropTypes from "prop-types";

// const SearchInput = ({ darkMode, onSearch }) => {
//   const [input, setInput] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();

//     onSearch(input);
//   };

//   return (
//     <div
//       className={`${
//         darkMode ? "bg-darkModeElements" : "bg-white"
//       } w-full h-[50px] md:w-1/3 shadow-md rounded-md flex items-center gap-5 px-5`}
//     >
//       <BsSearch />
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder="Search for a country..."
//           name="search"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="bg-transparent outline-none w-full"
//         />
//       </form>
//     </div>
//   );
// };

// SearchInput.propTypes = {
//   darkMode: PropTypes.any,
//   onSearch: PropTypes.any,
//   allCountries: PropTypes.any,
// };

// export default SearchInput;
