import React from "react";

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}


const array = [
    {
    id: "1",
    hikeName: "hike",
    location: "somewhere",
    },
    {
    id: "2",
    hikeName: "hike1",
    location: "somewhere1",
    },
    {
    id: "3",
    hikeName: "hike2",
    location: "somewhere2",
    },
    {
    id: "4",
    hikeName: "hike3",
    location: "somewhere3",
    }
]
// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export default function Grid({  }) {
    return (
        <div
            uk-grid
        >
            {array.map(hike => {
                return (
                    <div key={hike.id}>
                        <p>{hike.hikeName}</p>
                        <p>{hike.location}</p>
                    </div>
                )
            })}
        </div>
    );
}

// export function Col({ size, children }) {
//     return (
//         <div
//             className={size
//                 .split(" ")
//                 .map(size => "col-" + size)
//                 .join(" ")}
//         >
//             {children}
//         </div>
//     );