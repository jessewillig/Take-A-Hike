import React, { useState, useEffect } from "react";
import { List } from "../List";
import Hike from "../HikeCard";


function SearchResults(props) {
    return (
        <div>
            <List>
                {props.trailResults.map(hike => (
                    <Hike
                        name = {hike.name}
                        city = {hike.city}
                        state = {hike.state}
                        image_url = {hike.image_url}
                    />
                ))}
         
            </List>
        </div>
    )
}

export default SearchResults