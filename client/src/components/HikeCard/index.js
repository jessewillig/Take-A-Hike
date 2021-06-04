import React, { useState } from "react";
import { saveHike } from "../../utils/API";
import { ListItem } from "../List";

const addHike = props => {
    const hike = {
        title: props.name,
        city: props.city,
        state: props.state,
        image: props.image_url,
    }
    console.log(hike)
    saveHike(hike)
        .then((response) => console.log(response))
        .catch(err => console.log(err));
};

function Hike(props) {


    return (
        <ListItem>
            <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left search-result">
                <h2>Trail Name: {props.name}</h2>
                <p>Location: {props.city} , {props.state}</p>
                <img src={props.image_url} height="150px" width="150px" alt="Yelp" uk-img></img>
                <button className="uk-button uk-button-primary uk-button-small" onClick={() => addHike(props)}>Save</button>
            </div>
        </ListItem>

    );
}

export default Hike