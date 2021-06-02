import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left">
    <div className="search-result">
        <img src={props.trailResults.image_url}></img>
    </div>
  </div>
  );
}

export default SearchResults