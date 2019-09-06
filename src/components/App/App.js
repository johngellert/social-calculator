import React, { useState, useEffect } from "react";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import UserPage from "../UserPage/UserPage";

function App(props) {

  useEffect(() => {props.dispatch({type: 'FETCH_USER'})}, []);

  return (
    <Router>
      <Switch>
        {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
        <Redirect exact from="/" to="/home" />
        <ProtectedRoute exact path="/home" component={UserPage} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    loginMode: state.loginMode,
    user: state.user,
  }
}

export default connect(mapStateToProps)(App);
