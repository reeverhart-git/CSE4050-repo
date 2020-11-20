import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "./Auth";
import firebase from './firebase'

const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const {email, password } = event.target.elements;
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className = "userdash">
            <h1 className = "inputbox">Log in</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input className = "inputbox" name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input className = "inputbox" name="password" type="password" placeholder="Password" />
                </label>
                <button className = "button" type="submit">Log In</button>
            </form>
            <button className = "button" onClick={() => history.push("/signup")}>Not a member?</button>
        </div>
    );
};

export default withRouter(Login);