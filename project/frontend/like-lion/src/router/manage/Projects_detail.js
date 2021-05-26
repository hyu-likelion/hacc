import React from "react";
import {Link} from "react-router-dom";
import "./styles/Projects_detail.css";

const project = {
  "name": "프로젝트 이름",
  "description": "description",
  "sdate": "sdate",
  "edate": "edate",
  "image": "https://docs.microsoft.com/ko-kr/xamarin/android/deploy-test/publishing/publishing-to-amazon-images/amazon-app-store.png",
  "link": "project link(git)",
  "team": "team member? or team name?",
}

function Projects_detail() {
  return (
    <div id={"container"}>
      <h2>{project.name} 수정하기</h2>
      <form>
        <table>
          <tr>
            <th>제목</th>
            <th className={"project-detail-input"}>
              <input type={"text"} value={project.name}/>
            </th>
          </tr>
          <tr>
            <th>개발기간</th>
            <th className={"project-detail-input"}>
              <input type={"date"}/>
              ~
              <input type={"date"}/>
            </th>
          </tr>
          <tr>
            <th>팀인원</th>
            <th className={"project-detail-input"}>
              <input type={"text"} value={project.team}/>
              <input type={"text"} value={project.team}/>
              <input type={"text"} value={project.team}/>
            </th>
          </tr>
          <tr>
            <th>설명</th>
            <th className={"project-detail-input"}>
              <textarea value={project.description}/>
            </th>
          </tr>
          <tr>
            <th>사진선택</th>
            <th className={"project-detail-input"}>
              <input type={"file"} accept={"image"}/>
            </th>
          </tr>
          <tr>
            <th>링크</th>
            <th className={"project-detail-input"}>
              <input type={"text"} value={project.link}/>
            </th>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Projects_detail;