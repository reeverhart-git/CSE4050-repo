import { render } from '@testing-library/react';
import React, { useContext, useEffect, useRef } from 'react';
import ScrollableFeed from 'react-scrollable-feed'
import './App.css';
import firebase from './firebase'


class Chatbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            newMsgContent: "",
            displayName: "Anonymous"
            
        };
    }

    
    
    sendMessage = () => {
        var user = firebase.auth().currentUser;
        var username = ""
        if (user.displayName == null){
          username = user.email
        }
        else{
          username = user.displayName
        }
        const db = firebase.firestore()
        var myDate = firebase.firestore.Timestamp.fromDate(new Date());
        // Only send a message if its not just whitespace.
        if (this.state.newMsgContent.trim().length > 0){
          db.collection('messages').add({username: username, content: this.state.newMsgContent, timestamp: myDate})
        }
        // Reset the entry form
        this.setState({newMsgContent: ""})
        
      }
  
    componentWillMount = () => {
      const db = firebase.firestore()
      //subcribe to changes in firestore database, and return an unsubscribe function
      return db.collection('messages').orderBy("timestamp").onSnapshot((snapshot) => {
        const messagesData = []
        snapshot.forEach(doc => messagesData.push(({ ...doc.data(), id: doc.id, timestamp: doc.timestamp })))
        this.setState({ messages: messagesData})
      })
    }
    
    // listener for the enter button
    listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        this.sendMessage();
      }
    }
    
    render() {
        return (
            //list of messages frome firestore
            <>
            <div className = "chatbox">
              <div className = "scrollwrapper">
                  <ScrollableFeed forceScroll className = "scrollbox">
                      {this.state.messages.map(message => (
                          <>
                          <li key={message.id} className = "message">
                            <span className = "username">{message.username}</span>:<br></br> <div className = "content">{message.content}</div>
                          </li>
                          <div id="end"  className = "anchor"></div>
                          </>
                      ))}
                  </ScrollableFeed>
                  <div id = "MsgBar" className = "inputbox">
                    <input className = "inputfield" placeholder = "Type a message here!" onKeyDown={this.listener} value={this.state.newMsgContent} onChange={(e) => this.setState({ newMsgContent: e.target.value})}/>
                    <button className = "button" onClick={this.sendMessage}>Send</button>
                  </div>
              </div>
            </div>
            
            </>
          );
    }
}

export default Chatbox;
