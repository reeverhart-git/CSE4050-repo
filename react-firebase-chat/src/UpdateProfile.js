import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "./Auth";
import firebase from './firebase'

const LIMIT = 20
const MIN = 3

const UpdateProfile = ({ history }) => {
    const handleUpdate = useCallback(async event => {
        event.preventDefault();
        const {displayname} = event.target.elements;
        if (displayname.value.length <= LIMIT && displayname.value.length > MIN) {
            try {
                await firebase
                    .auth()
                    currentUser.updateProfile({displayName: displayname.value})
                history.push("/");
            } catch (error) {
                alert(error);
            }
        }else if(displayname.value.length <= MIN){
            alert(`Sorry, that username is too short. Usernames should be larger than ${MIN} characters.`)
        } else {
            alert(`Sorry, that username is too long. Usernames should be <= ${LIMIT} characters.`)
        }
        
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    return (
        <div className = "userdash">
            <h1 className = "inputbox">Log in</h1>
            <form onSubmit={handleUpdate}>
                <label>
                    Display Name
                    <input className = "inputbox" name="displayname" type="displayname" placeholder="Displayname" />
                </label>
                <button className = "button" type="submit">Update</button>
            </form>
        </div>
    );
};

export default withRouter(UpdateProfile);