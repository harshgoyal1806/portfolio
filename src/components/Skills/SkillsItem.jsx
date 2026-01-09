import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const SkillsItem = ({ skill }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <div className="card-item">
        <img src={skill.img} alt="skill-image" className="skill-image" />
        <div>
          <h3>{skill.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
