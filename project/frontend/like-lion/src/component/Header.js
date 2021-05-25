import React from "react";
import {Link, useLocation} from "react-router-dom"
import "./Header.css"

export default function Header() {
  const
    location = useLocation(),
    path = location.pathname,
    isManage = path.split('/')[1] === 'manage',
    toPath = isManage ? "/manage" : "/";

  return (
    <header>
      <div className={"header-title"}>
        {/*관리자 페이지/유저 페이지에 따라 달라지게 하기 + 링크도 다르게 지정*/}
        <Link to={toPath}>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/7/74/%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC_%EB%A1%9C%EA%B3%A0.png"}/>
          <div>멋쟁이사자처럼 한양대학교</div>
          {
            isManage
              ? <div className={"header-title-subtitle"}>관리자 페이지</div>
              : null
          }
        </Link>
      </div>
      <div className={"header-menus"}>

      </div>
    </header>
  );
}