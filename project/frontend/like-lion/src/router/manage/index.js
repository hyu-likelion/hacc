import React, {useState} from "react";
import Managers from "./Managers"
import Projects from "./Projects"
import "./styles/index.css"

function Manage() {
  return (
    <div id={"container"}>
      <div id={"managers"}><Managers/></div>
      <div id={"projects"}><Projects/></div>
    </div>
  );
}

export default Manage;