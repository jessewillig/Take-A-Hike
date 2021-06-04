import React from "react";
import { ListItem } from "../List";

function Hike(props) {
    return (
        <ListItem>
            <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left search-result">
                <h2>Trail Name: {props.name}</h2>
                <p>Location: {props.city} , {props.state}</p>
                <img src={props.image_url} height="150px" width="150px" alt="Yelp" uk-img></img>
            </div>
        </ListItem>

    );
}

export default Hike