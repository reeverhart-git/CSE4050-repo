import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from './firebase'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password } = event.target.elements;
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className = "userdash">
            <h1 className = "inputbox">Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input className = "inputbox" name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input className = "inputbox" name="password" type="password" placeholder="Password" />
                </label>
                <button className = "button" type="submit">Sign Up</button>
            </form>
            <button className = "button" onClick={() => history.push("/login")}>Already a member?</button>
        </div>
    );
};

export default withRouter(SignUp);