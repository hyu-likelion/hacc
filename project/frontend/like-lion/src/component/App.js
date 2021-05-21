import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Main from "../router/main";
import Manage from "../router/manage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/manage" component={Manage}/>
      </Switch>
    </Router>
  );
}

export default App;
