import React, { useState, useEffect } from "react";
import firebase from './firebase';
import Chatbox from "./chatbox";

const Home =  ({ history }) => {
    
    const [ username, setUsername] = useState(firebase.auth().currentUser.email);

    useEffect(() => {
        if (firebase.auth().currentUser.displayName == null){
            setUsername(firebase.auth().currentUser.email)
        } else {
            setUsername(firebase.auth().currentUser.displayName)
        }
    })
    
    return (
        <>
            <div className = "userdash">
                <span>Welcome to the Chat Room,<span className = "username">{username}</span>!</span>
                <button className = "button" onClick={() => firebase.auth().signOut()}>Sign Out</button>
                <button className = "button" onClick={() => history.push("/profile")}>Edit Profile</button>
            </div>
            
            <Chatbox />
        </>
    );
};

export default Home;