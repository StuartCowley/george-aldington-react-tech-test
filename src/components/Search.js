import React, { useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";
import "../styles/search.css";

function Search({ setSearchResults }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchValue);
    setSearchResults(await getImages(searchValue));
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
        <button className="search-button" type="submit" data-testid="search-button">
          ?
        </button>
      </form>
    </>
  );
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
