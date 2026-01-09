import React, { useContext } from "react";
import skillsData from "./skillsData";
import SkillsItem from "./SkillsItem";
import { ThemeContext } from "../context/themeContext";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`skills ${theme}`}>
      {skillsData.map((skill) => (
        <SkillsItem key={skill.id} skill={skill} theme={theme} />
      ))}
    </div>
  );
};

export default Skills;
