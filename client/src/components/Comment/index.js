import React from "react";
import "./style.css";

function Comment (props) {
    return (
        <div className="uk-container card-container">
            {props.children}
        </div>
    )
};

export default Comment;