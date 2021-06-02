import React from "react";
import "./style.css";

function SearchResults() {
  return (
    <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left">
    <div className="search-result">
        <h2>Trail Name: {JSON.stringify(trailResults[0].name)}</h2>
        <p>Location: {JSON.stringify([trailResults[0].location.city, trailResults.location.state])}</p>
    </div>
  </div>
  );
}

export default SearchResults