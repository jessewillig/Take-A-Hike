import React from "react";

function Login({ email, password, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-row">
                <div className="col-md-9">
                    <input
                        name="email"
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter your email"
                        id="username"
                    />
                </div>
                <div className="col-md-9">
                    <input
                        name="password"
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter your password"
                        id="password"
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-light btn-sm form-control" type="submit" onClick={handleFormSubmit}>
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Login;