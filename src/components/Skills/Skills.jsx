import Heading from "../Heading/Heading";
import {
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiChakraui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGit,
} from "react-icons/si";
import SkillList from "./SkillLIst";

const development = [
  { name: "javaScript", icon: <SiJavascript size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "NextJs", icon: <SiNextdotjs size={40} /> },
  { name: "Redux", icon: <SiRedux size={40} /> },
];
const libraries = [
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
  { name: "Sass/Less", icon: <SiSass size={40} /> },
  // { name: "Material UI", icon: <SiMaterialui size={40} /> },
  { name: "Chakra UI", icon: <SiChakraui size={40} /> },
  { name: "figma", icon: <SiFigma size={40} /> },
];
const backend = [
  { name: "NodeJs", icon: <SiNodedotjs size={40} /> },
  { name: "ExpressJs", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
];

const Skills = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-24 py-32 pl-5">
      <div className="space-y-16">
        <Heading>Primary skills</Heading>
        <SkillList skills={development} />
      </div>
      <div className="space-y-16">
        <Heading variant="h3">Libraries / tools</Heading>
        <SkillList skills={libraries} />
      </div>
      <div className="space-y-16">
        <Heading variant="h3">Other skills</Heading>
        <SkillList skills={backend} />
      </div>
    </div>
  );
};

export default Skills;
