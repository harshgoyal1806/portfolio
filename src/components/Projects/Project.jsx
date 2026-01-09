import React, { useContext } from "react";
import projectData from "./projectData";
import ProjectItem from "./projectitem";
import { ThemeContext } from "../context/themeContext";

const Project = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`project-container ${theme}`}>
      {projectData.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Project;
