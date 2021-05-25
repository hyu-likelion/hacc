import React from "react";
import "./Managers.css"

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

function Manager({manager}) {
  return (
    <div className={"managers-each"}>
      <img src={"https://image.flaticon.com/icons/png/512/2948/2948035.png"}/>
      <div>
        <div>직책 : {manager.duty}</div>
        <div>학부 : {manager.depart}</div>
        <div>이름 : {manager.name}</div>
        <div>stack? : {manager.stack}</div>
        <div>description? : {manager.description}</div>
      </div>
    </div>
  );

}

function Managers() {
  return (
    <div> {/* TODO: 크기 반응형으로 만들기 */}
      <h2>운영진 소개</h2>
      <h4>기수 : 9기</h4>  {/*TODO: DB에서 불러오기?*/}
      <div className={"managers-container"}>
        {managers.map(manager => <Manager manager={manager} />)}
      </div>
    </div>
  );
}

export default Managers;