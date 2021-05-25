import React from "react";
import {useLocation}  from "react-router-dom"
import "./Header.css"

function SubTitle() {
  // TODO : 관리자 페이지/유저 페이지에 따라 달라지게 하기 + 링크도 다르게 지정
  // const location = useLocation();
  // console.log(location)
  // console.log(location.pathname)
  // console.log(event)
  return (
    <div className={"header-title-subtitle"}>관리자 페이지</div>
  );
}

function Header() {
  return (
    <header>
      <div className={"header-title"}>
        <div>Logo</div> {/*TODO : Logo link 삽입*/}
        <div>멋쟁이사자처럼 한양대학교</div>
        <SubTitle/>
      </div>

      <div className={"header-menus"}>

      </div>

    </header>
  );
}

export default Header;