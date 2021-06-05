import React from "react";
import { LOGOUT } from "../../utils/actions";

import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { useHikeContext } from "../../utils/GlobalState";
import { logout } from "../../utils/API"

function Nav() {
    const [state, dispatch] = useHikeContext();
    const history = useHistory();

    const handleLogOut = (event) => {
        event.preventDefault();
        logout()
            .then(response => {
                dispatch({
                    type: LOGOUT
                });

                history.push("/");
            })
    }

    return (
        <div>
            <nav className="uk-navbar-container nav">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li ><Link className="nav-link" to="/">Take a Hike</Link></li>
                        {state.user.user_id ?
                            <li ><a className="nav-link-right" href="#" onClick={handleLogOut} >Logout</a></li>
                            :
                            <li ><Link className="nav-link-right" to="/signup">Sign-Up</Link></li>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;