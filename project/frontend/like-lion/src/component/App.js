import { HashRouter, Route } from "react-router-dom";
import React from "react";
import Main from "../router/main";
import Manage from "../router/manage";
import Header from "./Header";

function App() {
  return (
    <HashRouter>
      <Header/>
      <div style={{margin: '20px', width: '100%', height: '100%'}}>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/manage" component={Manage}/>
      </div>
    </HashRouter>
  );
}

export default App;
