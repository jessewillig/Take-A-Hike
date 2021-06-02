import React, { useState, useEffect } from "react";
import { List } from "../List";
import Hike from "../Hike"

function SearchResults(props) {
    return (
        <div>
            <List>
                {props.trailResults.map(hike => (
                    <Hike
                        trailResults={props.trailResults}

                    />
                ))}
                <Hike
                    trailResults={props.trailResults}

                />
            </List>
        </div>
    )
}

export default SearchResults