import './App.css';
import React, {useState} from "react";

function App() {
  const onClickdiv = () => {
    settext("hihi")
  };
  const [text, settext] = useState("hi");
  
  return (
    <div onClick={onClickdiv}>
      {text}
    </div>
  );
}

export default App;
