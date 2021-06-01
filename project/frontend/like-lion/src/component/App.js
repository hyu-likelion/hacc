import { HashRouter, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Main from "../router/main";
import Manage from "../router/manage";
import Managers_detail from "../router/manage/Managers_detail";
import Projects_detail from "../router/manage/Projects_detail";

function App() {
  return (
    <HashRouter>
      <Header/>
      <div style={{margin: '20px', width: '100%', height: '100%'}}>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/manage" exact={true} component={Manage}/>
        <Route path="/manage/manager/:id?" component={Managers_detail}/>
        <Route path="/manage/project/:id?" component={Projects_detail}/>
      </div>
    </HashRouter>
  );
}

export default App;
