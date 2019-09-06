import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import NavDrawer from "../NavDrawer/NavDrawer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Social Calculator</h1>
        </header>
      </div>
    </Router>
  );
}

export default App;
