import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><Link to="/">Take a Hike</Link></li>
                        <li><Link to="/saved">Saved</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;