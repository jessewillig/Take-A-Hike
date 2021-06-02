import React from "react";
import { ListItem } from "../List";

function Hike(name, city, state, image_url) {
    return (
        <ListItem>
            <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left search-result">
                <h2>Trail Name: {name}</h2>
                <p>Location: {city} , {state}</p>
                <img src={image_url} height="150px" width="150px" alt="Yelp" uk-img></img>
            </div>
        </ListItem>

    );
}

export default Hike