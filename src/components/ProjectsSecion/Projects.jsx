import Button from "../Button/Button";
import ProjectCard from "../Card/ProjectCard";
import ProjectCard2 from "../Card/ProjectCard2";
import ProjectHeading from "./ProjectHeading";
import Css from "../../assets/images/css.png";
import Hilo from "../../assets/images/instagram.png";

const Projects = () => {
  return (
    <div className="flex justify-end py-20">
      <div className="flex w-[78vw] flex-col justify-center space-y-16 ">
        <ProjectHeading
          title={"Projects"}
          text={"Some of the Projects I am currently working on."}
        />
        <ProjectCard />
        <div className="space-y-40 pb-40">
          <ProjectCard2
            name={"CSS genrator"}
            desc={
              "An app that lets you genrate CSS for your Html elements with a GUI interface"
            }
            img={Css}
            github={"https://github.com/ykverma99/genrator"}
            view={"https://ykverma99.github.io/genrator/"}
          >
            <Button varient={"outline"} className={"text-white"} size={"sm"}>
              React js
            </Button>
            <Button varient={"outline"} className={"text-white"} size={"sm"}>
              React-Router
            </Button>
            <Button varient={"outline"} className={"text-white"} size={"sm"}>
              TailwindCss
            </Button>
          </ProjectCard2>
          <ProjectCard2
            name={"Hilo Guys"}
            desc={`Developed a full-stack Instagram clone with a real-time chat system`}
            img={Hilo}
            github={"https://github.com/ykverma99/hilo-guys"}
            view={"https://hilo-guys.onrender.com/"}
            direction={"flex-row-reverse"}
          >
            <Button varient={"outline"} className={"text-white"} size={"sm"}>
              HTML/CSS
            </Button>
            <Button varient={"outline"} className={"text-white"} size={"sm"}>
              JavaScript
            </Button>
            <Button varient={"outline"} className={"text-white"} size={"sm"}>
              Node.js
            </Button>
            <Button varient={"outline"} className={"text-white"} size={"sm"}>
              MognoDB
            </Button>
            <Button varient={"outline"} className={"text-white"} size={"sm"}>
              Socket.io
            </Button>
          </ProjectCard2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
