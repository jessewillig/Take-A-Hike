import React from "react";
import { List } from "../List";
import Hike from "../HikeCard";
import "./style.css";

function SearchResults(props) {

  const trails = [];
  for (let i = 0; i < props.trailResults.length; i++) {
    trails.push(
      props.trailResults[i]
    )
  }
  console.log(trails)

  const Hikes = trails.map(hike => (
    <Hike
      name={hike.name}
      city={hike.city}
      state={hike.state}
      image_url={hike.image_url}
    />
  ));


  return (

    <List className = "list">
      {Hikes}
    </List>



    // <div className="uk-flex uk-margin-bottom">
    //   <div className="uk-card uk-card-default uk-card-hover uk-width-expand uk-margin ">
    //     <div className="search-result uk-margin-bottom">
    //       <h2>Trail Name:</h2>
    //       <h2>{props.trailResults[0].name}</h2>
    //       <p>
    //         Location:{" "}
    //         {props.trailResults[0].city + `, ` + props.trailResults[0].state}
    //       </p>
    //       <img
    //         src={props.trailResults[0].image_url}
    //         height="150px"
    //         width="150px"
    //         alt="Yelp"
    //         // uk-img
    //       ></img>
    //     </div>
    //   </div>
    // </div>
  );
}

export default SearchResults;
