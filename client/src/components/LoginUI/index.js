import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../utils/API";
import { useHikeContext } from "../../utils/GlobalState";
import { ERROR, LOGIN } from "../../utils/actions";

function Login () {

    const [state, dispatch] = useHikeContext();
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (event) => {
        event.preventDefault()
        login({
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
                    type: ERROR
                })
            })
    }


    return (
        <div>
        <div class="uk-card uk-card-default uk-width-1-3@m  login">
            <div class="uk-container uk-container-small">
             <form>
                 <fieldset className="uk-fieldset">
                <legend className="uk-legend">Login</legend>
                <div className="uk-margin">
                    <input className="uk-input" type="text" placeholder="Email" ref={emailRef}></input>
                </div>
                <div className="uk-margin">
                    <input className="uk-input" type="text" placeholder="Password" ref={passwordRef}></input>
                </div>
                <div className="uk-margin">
                    <button class="uk-button uk-button-primary" type="submit" onClick={handleLogin}>Login</button>
                </div>
                </fieldset>
            </form>
            </div>
        </div>
    </div>
    );
}

export default Login;