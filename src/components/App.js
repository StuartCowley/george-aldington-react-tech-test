import React from "react";
import { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import "../styles/app.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA in red stylised font"
      />
      <h1 className="heading">NASA Image Search</h1>
      <Search setSearchResults={setSearchResults} setLoading={setLoading} />
      {!loading && <SearchResults results={searchResults} />}
    </div>
  );
};

export default App;
