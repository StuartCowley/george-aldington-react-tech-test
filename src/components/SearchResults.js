import React from "react";
import PropTypes from "prop-types";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>Sorry, we couldn't find anything.</p>;
  }
  return results.map((image) => {
    return <img src={image} alt="placeholder" />;
  });
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};
export default SearchResults;
