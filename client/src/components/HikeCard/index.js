import React from "react";
import { saveHike } from "../../utils/API";
import { ListItem } from "../List";
import "./style.css"

const addHike = props => {
    const hike = {
        id: props.id,
        title: props.name,
        city: props.city,
        state: props.state,
        image: props.image_url,
        url: props.url
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
                <img src={props.image_url} height="150px" width="150px" alt="Yelp" className="uk-img"></img>
                <br></br>
                <br></br>
                <button className="uk-button uk-button-primary uk-button-small" onClick={() => addHike(props)}>Save</button>
                <br></br>
                <br></br>
                <button className="uk-button uk-button-primary uk-button-small"><a target="_blank" rel="noopener noreferrer" href={props.url}>View Hike</a></button>
            </div>
        </ListItem>

    );
}

export default Hike