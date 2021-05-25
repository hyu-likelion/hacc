import React from "react";
import {Link} from "react-router-dom";
import "./Projects.css"

const projects = [
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "2017.02",
    "edate": "2018.01",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
  {
    "name": "프로젝트 이름",
    "description": "description",
    "sdate": "sdate",
    "edate": "edate",
    "image": "image link",
    "link": "project link(git)",
    "team": "team member? or team name?",
  },
]

function Project({project}) {
  return (
    <div className={"project-each"}>
      {/* TODO: 이미지 클릭하면 크게 보기 구현 */}
      <img src={"https://image.flaticon.com/icons/png/512/1705/1705213.png"}/>
      <div>
        <Link to={project.link} className={"project-each-name"}>{project.name}</Link>
        <div className={"project-each-date"}>{project.sdate}~{project.edate}</div>
        <div>{project.team}</div>
        <div>{project.description}</div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>자랑거리</h2>
      <h4>전체목록 00개</h4> {/*TODO: 몇개인지 받아서 넣기*/}
      <div className={"projects-container"}>
        {projects.map(project => <Project project={project}/>)}
      </div>
    </div>
  );
}

export default Projects;