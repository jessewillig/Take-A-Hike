import React from "react";
import Hike from "../Hike"

const array = [
    {
    id: "1",
    name: "hike",
    location: "somewhere",
    },
    {
    id: "2",
    name: "hike1",
    location: "somewhere1",
    },
    {
    id: "3",
    name: "hike2",
    location: "somewhere2",
    },
    {
    id: "4",
    name: "hike3",
    location: "somewhere3",
    }
]

export default function Grid({ }) {
    return (
        <div
            data-uk-grid

        >
            {array.map(hike => {
                return (
                    <Hike hike={hike}/>
                )
            })}
        </div>
    );
}
