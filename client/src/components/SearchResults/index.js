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

<div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left">
<div className="search-result">
  <h2>
    Trail Name:{" "}

    {JSON.stringify(trailResults[0].name)}
    Trail Name: {trailResults[0].name}
  </h2>

  <p>
    Location:{" "}
    {JSON.stringify([
      trailResults.city,
      trailResults.state,
    ]).replace(/['"]+/g, "")}
    Location: {trailResults[0].city + `, ` + trailResults[0].state}
  </p>
  <img src={trailResults[0].image_url} height="150px" width="150px" alt="Yelp" uk-img></img>
</div>
</div>
</div>

export default SearchResults