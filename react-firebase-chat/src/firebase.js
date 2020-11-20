import firebase from 'firebase';
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyAuDR0r2xTnyQLV0B3RqBwKDQ-xF6Z0byk",
    authDomain: "cse4050-project.firebaseapp.com",
    databaseURL: "https://cse4050-project.firebaseio.com",
    projectId: "cse4050-project",
    storageBucket: "cse4050-project.appspot.com",
    messagingSenderId: "497709309774",
    appId: "1:497709309774:web:5a0427ea9bba3b4494481f",
    measurementId: "G-WW1ZV5T6P8"
  };

  //initialize Firebase
  firebase.initializeApp(config);

  export default firebase