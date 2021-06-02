import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
      <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left">
        <div className="search-result">
          <img src={props.trailResults.image_url}></img>
        </div>
      </div>


      <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left">
        <div className="search-result">
          <h2>
           {JSON.stringify(props.trailResults[0].name)}
            Trail Name: {props.trailResults[0].name}
          </h2>

          <p>
            {JSON.stringify([
              props.trailResults.city,
              props.trailResults.state,
            ]).replace(/['"]+/g, "")}
            Location: {props.trailResults[0].city + `, ` + props.trailResults[0].state}
          </p>
          <img src={props.trailResults[0].image_url} height="150px" width="150px" alt="Yelp" uk-img></img>
        </div>
      </div>
    </div>

  );
}

export default SearchResults