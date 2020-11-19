import React from 'react';
import './App.css';
import firebase from './firebase'
import Chatbox from './chatbox'

function App() {

  // MOVED ALL OF THIS TO A SEPARATE COMPONENT, THIS WILL EVENTUALLY BE REPLACED WITH FUNCTIONALITY

  //const [messages, setMessages] = React.useState([])
  //const [newMsgContent, setNewMsgContent] = React.useState()
  //const [displayName, setDisplayName] = React.useState("Anonymous")
  //let endRef = React.useRef()

  //React.useEffect(() => {
   // const db = firebase.firestore()
    //subcribe to changes in firestore database, and return an unsubscribe function
   // return db.collection('messages').orderBy("timestamp").onSnapshot((snapshot) => {
      //const messagesData = []
      //snapshot.forEach(doc => messagesData.push(({ ...doc.data(), id: doc.id, timestamp: doc.timestamp })))
      //setMessages(messagesData)
   // })
  //}, [])

  

  //const sendMessage = () => {
    //const db = firebase.firestore()
    //var myDate = firebase.firestore.Timestamp.fromDate(new Date());
   // db.collection('messages').add({username: displayName, content: newMsgContent, timestamp: myDate})
  
 // }

  //return (
    //list of messages frome firestore
   // <>
   // <ul className = "scrollbox">
    //  {messages.map(message => (
      //  <>
       // <li key={message.id}>{message.username}:    {message.content}</li>
       // <div id="end"className = "anchor"></div>
       // </>
     // ))}
    //</ul>
    //<div id = "MsgBar">
    //  <input placeholder = "Anonymous" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
     // <input placeholder = "Type a message here!" value={newMsgContent} onChange={(e) => setNewMsgContent(e.target.value)}/>
     // <button onClick={sendMessage}>Send</button>
  //  </div>
   // </>
  //);
}

export default App;
