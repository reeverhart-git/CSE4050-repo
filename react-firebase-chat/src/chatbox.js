import { render } from '@testing-library/react';
import React, { useEffect, useRef } from 'react';
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
        const db = firebase.firestore()
        var myDate = firebase.firestore.Timestamp.fromDate(new Date());
        // Only send a message if its not just whitespace.
        if (this.state.newMsgContent.trim().length > 0){
          db.collection('messages').add({username: this.state.displayName, content: this.state.newMsgContent, timestamp: myDate})
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
            <div className = "scrollwrapper">
                <ScrollableFeed forceScroll className = "scrollbox">
                    {this.state.messages.map(message => (
                        <>
                        <li key={message.id} className = "message">
                          <span className = "username">{message.username}</span>: <span className = "content">{message.content}</span>
                        </li>
                        <div id="end"  className = "anchor"></div>
                        </>
                    ))}
                </ScrollableFeed>
                <div id = "MsgBar" className = "inputbox">
                  <input className = "inputfield" placeholder = "Anonymous" value={this.state.displayName} onChange={(e) => this.setState({ displayName: e.target.value})}/>
                  <input className = "inputfield" placeholder = "Type a message here!" onKeyDown={this.listener} value={this.state.newMsgContent} onChange={(e) => this.setState({ newMsgContent: e.target.value})}/>
                  <button className = "button" onClick={this.sendMessage}>Send</button>
                </div>
            </div>
            
            </>
          );
    }
}

export default Chatbox;
