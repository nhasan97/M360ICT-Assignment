import { useContext } from "react";
import { SearchContext } from "../providers/SearchProvider";

const useSearch = () => {
  const searchInfo = useContext(SearchContext);
  return searchInfo;
};

export default useSearch;
