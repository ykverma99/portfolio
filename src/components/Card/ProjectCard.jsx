import SpotifyImage from "../../assets/images/spotify.png";
import Button from "../Button/Button";
import ProjectHeading from "../ProjectsSecion/ProjectHeading";
import { RiShareBoxFill } from "react-icons/ri";

const ProjectCard = () => {
  return (
    <div className="space-y-10">
      <div className="relative flex h-[55vh] w-[55vw] items-center justify-center rounded-md bg-gradient-to-b from-green-500 to-green-300 object-cover hover:shadow-xl hover:shadow-green-600">
        <img
          className="h-3/4 w-3/4 rounded-md"
          src={SpotifyImage}
          alt="spotify"
        />
        <span className="absolute bottom-4 right-8 flex items-center gap-3">
          <Button size={"sm"} className={"bg-white text-black"}>
            React js
          </Button>
          <Button size={"sm"} className={"bg-white text-black"}>
            Express
          </Button>
          <Button size={"sm"} className={"bg-white text-black"}>
            Auth0
          </Button>
          <Button size={"sm"} className={"bg-white text-black"}>
            MongoDB
          </Button>
        </span>
      </div>
      <ProjectHeading
        title={"Spotify Clone"}
        text={` Welcome to MyTunes, a personalized music streaming platform designed
          to provide users with a seamless and enjoyable listening experience.`}
      />
      <div className="space-x-5">
        <a
          href="https://spotify-clone-ykverma99.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Button rightIcon={<RiShareBoxFill size={25} />}>
            View Live Demo
          </Button>
        </a>
        <a
          href="https://github.com/ykverma99/spotify-clone"
          target="_blank"
          rel="noreferrer"
        >
          <Button varient={"outline"} rightIcon={<RiShareBoxFill size={25} />}>
            Github
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
