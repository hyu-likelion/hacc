import React, {useState} from "react";

function Main() {
  const onClickdiv = () => {
    settext("hihi")
  };
  const [text, settext] = useState("main");
  
  return (
    <div onClick={onClickdiv}>
      {text}
    </div>
  );
}

export default Main;