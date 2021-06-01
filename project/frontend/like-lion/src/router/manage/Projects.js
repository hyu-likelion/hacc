import React from "react";
import {Link, useHistory} from "react-router-dom";
import "./styles/Projects.css"

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
  const history = useHistory();
  function handleProjectClick() {
    // 프로젝트 id 전달
    history.push("/manage/project")
  }

  return (
    <div className={"project-each"} onClick={handleProjectClick}>
      {/* TODO: 이미지 클릭하면 크게 보기 구현 */}
      <img src={"https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5c03f06cedfcdc4aefe74b7f_Preview3.jpeg"}/>
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
    <>
      <div id={"title"}>
        <h2>자랑거리</h2>
        <h4>전체목록 {projects.length}</h4>
      </div>
      <div className={"projects-container"}>
        {projects.map(project => <Project project={project}/>)}
      </div>
    </>
  );
}

export default Projects;