import React from "react";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results</p>;
  }
  return results.map((image) => {
    return (
    <img src={image}  alt="placeholder" />
    )
  });
}

export default SearchResults;
