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
      key={hike.id}
      name={hike.name}
      city={hike.city}
      state={hike.state}
      image_url={hike.image_url}
      url = {hike.url}
    />
  ));


  return (

    <List className="list">
      {Hikes}
    </List>

  );
}

export default SearchResults;