import React, {useState} from "react";
import Managers from "./Managers"
import Projects from "./Projects"

function Manage() {
  return (
    <div>
      <Managers/>
      <Projects/>
    </div>
  );
}

export default Manage;