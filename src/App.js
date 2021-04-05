import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import HowItWorks from "./HowItWorks";
import history from "./history";
import { Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/how-it-works">
          <HowItWorks />
        </Route>
      </Router>
    </div>
  );
}

export default App;
