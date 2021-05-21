import React from "react";
//import Trees from "../../assets/forest.jpg";
import "./style.css";

function Header() {
    return (
        <div className="uk-container-expand uk-animation-toggle header" tabIndex="0">
           <div className="uk-cover-container uk-height-medium">
           <iframe src="https://giphy.com/embed/gqh8uVtwvemTm" title="I hope we dont get in trouble" width="600" height="400" frameBorder="0"  allowFullScreen></iframe>
        </div>
           
            <p className="uk-animation-fade">Take a Hike</p>
        </div>
    )
}

export default Header