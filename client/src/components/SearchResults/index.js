import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>


      <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left">
        <div className="search-result">
          <h2>
            Trail Name: {props.trailResults[0].name}
          </h2>
          {props.trailResults[0].city ? (
            <p>
            Location: {props.trailResults[0].city + `, ` + props.trailResults[0].state}
          </p>
          ): (
            <p>Search for a location to begin!</p>
          )}
          
          <img src={props.trailResults[0].image_url} height="150px" width="150px" alt="Yelp" uk-img></img>
        </div>
      </div>
    </div>

  );
}

export default SearchResults