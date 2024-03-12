/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { RiShareBoxFill } from "react-icons/ri";

const ProjectCard2 = ({
  direction,
  name,
  desc,
  children,
  img,
  github,
  view,
}) => {
  return (
    <div className="relative w-9/12 space-y-10">
      <div className={`flex  items-center justify-center gap-40 ${direction} `}>
        <div className="flex h-96 w-96 items-center justify-center rounded-md bg-gradient-to-b from-blue-500 to-blue-300 object-cover hover:shadow-xl hover:shadow-blue-600">
          <img className="h-5/6 w-10/12 rounded-md" src={img} alt={img} />
        </div>
        <div>
          <h3 className="text-stroke-dark text-4xl font-bold uppercase">
            {name}
          </h3>
        </div>
      </div>
      <div className="absolute left-60 top-64 w-[55%] space-y-5 rounded-lg bg-gray-700 p-5">
        <p className="text-gray-400">{desc}</p>
        <span className="flex items-center gap-3">{children}</span>
        <div className="space-x-5">
          <a href={view} target="_blank" rel="noreferrer">
            <Button rightIcon={<RiShareBoxFill size={25} />}>Live Demo</Button>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <Button
              varient={"outline"}
              rightIcon={<RiShareBoxFill size={25} />}
            >
              Github
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard2;
