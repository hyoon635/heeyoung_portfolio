import React from "react";
import ProjectList from "../components/ProjectList";
import projectData from "../projectData.json";
import "./Projects.scss";

class Projects extends React.Component {
  state = {
    projectList: []
  };

  componentDidMount() {
   const projectList = projectData.projects;
   console.log(projectList);
   this.setState({projectList})
  }

  render() {
    const { projectList } = this.state;
   

    return <div className="projects">{projectList.map(project => (
      <ProjectList key={project.id} id={project.id} title={project.title} type={project.type} useTech={project.useTech} introduce={project.introduce} link={project.link} />
    ))}</div>;
  }
}

export default Projects;
