import React from "react";
import "./styles/Managers.css"

const managers = [
  {
    "image": "link",
    "duty": "회장",
    "depart": "컴퓨터소프트웨어학부",
    "name": "홍길동",
    "stack": "블라블라블라블라",
    "description": "블라블라블라블라블라블라블라블라블라블라블라블라블라",
  },
  {
    "image": "link",
    "duty": "직책",
    "depart": "컴퓨터소프트웨어학부",
    "name": "홍길동",
    "stack": "블라블라블라블라",
    "description": "블라블라블라블라블라블라블라블라블라블라블라블라블라",
  },
  {
    "image": "link",
    "duty": "직책",
    "depart": "컴퓨터소프트웨어학부",
    "name": "홍길동",
    "stack": "블라블라블라블라",
    "description": "블라블라블라블라블라블라블라블라블라블라블라블라블라",
  },
  {
    "image": "link",
    "duty": "직책",
    "depart": "컴퓨터소프트웨어학부",
    "name": "홍길동",
    "stack": "블라블라블라블라",
    "description": "블라블라블라블라블라블라블라블라블라블라블라블라블라",
  },
  {
    "image": "link",
    "duty": "직책",
    "depart": "컴퓨터소프트웨어학부",
    "name": "홍길동",
    "stack": "블라블라블라블라",
    "description": "블라블라블라블라블라블라블라블라블라블라블라블라블라",
  },
  {
    "image": "link",
    "duty": "직책",
    "depart": "컴퓨터소프트웨어학부",
    "name": "홍길동",
    "stack": "블라블라블라블라",
    "description": "블라블라블라블라블라블라블라블라블라블라블라블라블라",
  },
  {
    "image": "link",
    "duty": "직책",
    "depart": "컴퓨터소프트웨어학부",
    "name": "홍길동",
    "stack": "블라블라블라블라",
    "description": "블라블라블라블라블라블라블라블라블라블라블라블라블라",
  },
]

const turn = "9";

function Manager({manager}) {
  return (
    <div className={"managers-each"}>
      <div>
        <div className={"managers-each-name"}>
          <h3>{manager.name}</h3>
          <div>{manager.duty}</div>
        </div>
        <div>{manager.depart}</div>
        <div>stack {manager.stack}</div>
        <div>description {manager.description}</div>
      </div>
      {/*<img src={"https://image.flaticon.com/icons/png/512/2948/2948035.png"}/>*/}
      <img src={"https://resource.grapplet.com/marketplace/10485/1614110392355/%EB%85%B8%ED%8A%B8%EB%B6%81%ED%95%98%EB%8A%94%20%EC%82%AC%EB%9E%8C1.svg.preview.580x870.png"}/>
    </div>
  );
}

function Managers() {
  return (
    <>
      <h2>{turn}기 운영진 소개</h2>
      <div className={"managers-container"}>
        {managers.map(manager => <Manager manager={manager} />)}
      </div>
    </>
  );
}

export default Managers;