/* eslint-disable react/prop-types */
import Skill from "./Skill";

const SkillList = ({ skills }) => {
  return (
    <ul className="flex gap-16">
      {skills.map((skill) => {
        return <Skill key={skill.name} name={skill.name} icon={skill.icon} />;
      })}
    </ul>
  );
};

export default SkillList;
