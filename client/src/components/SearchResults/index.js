import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div className="uk-flex uk-margin-bottom">
      <div className="uk-card uk-card-default uk-card-hover uk-width-expand uk-margin ">
        <div className="search-result uk-margin-bottom">
          <h2>Trail Name:</h2>
          <h2>{props.trailResults[0].name}</h2>
          <p>
            Location:{" "}
            {props.trailResults[0].city + `, ` + props.trailResults[0].state}
          </p>
          <img
            src={props.trailResults[0].image_url}
            height="150px"
            width="150px"
            alt="Yelp"
            // uk-img
          ></img>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
