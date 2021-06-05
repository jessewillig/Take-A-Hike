import React, { useRef } from "react";
import "../../components/SignupUI/style.css"
import { useHistory } from "react-router-dom";
import { signup } from "../../utils/API";
import { useHikeContext } from "../../utils/GlobalState";
import { ERROR, LOGIN } from "../../utils/actions";
import { Link } from "react-router-dom";

function SignupUI() {

    const [state, dispatch] = useHikeContext();
    const history = useHistory();

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignup = (event) => {
        event.preventDefault()
        signup({
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
            .then(response => {
                dispatch({
                    type: LOGIN,
                    user: response.data
                });

                history.push("/");

            })
            .catch(error => {
                dispatch({
                    ERROR
                })
            })
    }


    return (
        <div>
            <div className="uk-card uk-card-default uk-card-hover uk-width-1-3@m  login">
                <div className="uk-container uk-container-small">
                    <form>
                        <fieldset className="uk-fieldset">
                            <legend className="uk-legend">Name</legend>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" placeholder="Name" ref={usernameRef}></input>
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" placeholder="Email" ref={emailRef}></input>
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input" type="password" placeholder="Password" ref={passwordRef}></input>
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-primary" type="submit" onClick={handleSignup}>Sign-Up</button>
                            </div>
                            <div className="uk-margin">
                                <ul><Link to="/login">Login Instead!</Link></ul>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupUI;