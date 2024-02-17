import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchedText, setSearchedText] = useState("");

  const globalSearch = () => {
    let text = "";
    if (document.getElementById("searchField").value) {
      text = document.getElementById("searchField").value;
    } else {
      text = "";
    }
    setSearchedText(text);
  };

  const searchValue = { searchedText, globalSearch };
  return (
    <SearchContext.Provider value={searchValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
