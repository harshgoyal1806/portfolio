import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const ProjectItem = ({ project }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`project-card ${theme}`}>
      <img src={project.img} alt="project-image" className="project-image" />
      <div className="project-desc">
        <h3>{project.name}</h3>
        <p>{project.techStack}</p>
        <p>{project.description}</p>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Link
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
