import React, { useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";
import { TfiSearch } from "react-icons/tfi";
import "../styles/search.css";

function Search({ setSearchResults, setLoading }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(searchValue));
    await setLoading(false);
  };

  return (
    <>
      <form className="search-form" onSubmit={(event) => handleSubmit(event)}>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          type="text"
          data-testid="search-input"
        />
        <button
          className="search-button"
          type="submit"
          data-testid="search-button"
        >
          <TfiSearch />
        </button>
      </form>
    </>
  );
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Search;
