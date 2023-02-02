import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(searchValue);
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
      <button className="search-button" type="submit">?</button>
      </form>
    </>
  );
}

export default Search;
