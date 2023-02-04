import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p className="no-images-message">Sorry, we couldn't find anything.</p>;
  }
  return (
    <div className="search-results">
      {results.map((image, index) => {
        return (
          <img
            className="search-results__image"
            src={image}
            alt="space_image"
            key={index}
          />
        );
      })}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};
export default SearchResults;
