import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from './firebase'
import Chatbox from './chatbox'
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from './UpdateProfile';

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <div>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/profile" component={UpdateProfile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
