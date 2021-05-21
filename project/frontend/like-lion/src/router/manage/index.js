import React, {useState} from "react";

function Manage() {
  const onClickdiv = () => {
    settext("hihi")
  };
  const [text, settext] = useState("manage");
  
  return (
    <div onClick={onClickdiv}>
      {text}
    </div>
  );
}

export default Manage;