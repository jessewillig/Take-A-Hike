import React, { useState, useEffect } from "react";
import { List, ListItem } from "../List";
import Hike from "../HikeCard";


function SearchResults(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left search-result">
                        <h2>Trail Name: {props.trailResults[0].name}</h2>
                        <p>Location: {props.trailResults[0].city} , {props.trailResults[0].state}</p>
                        <img src={props.trailResults[0].image_url} height="150px" width="150px" alt="Yelp" uk-img></img>
                    </div>
                </ListItem>
            </List>
        </div>
    )
}

export default SearchResults