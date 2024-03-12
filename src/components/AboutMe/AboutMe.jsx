import { HiOutlineDownload } from "react-icons/hi";
import Avtar from "../../assets/images/avatar2.png";
import resume from "../../assets/resume/My_Resume.pdf";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const AboutMe = () => {
  return (
    <div className="flex h-3/4 w-[60%] items-center justify-center gap-7 rounded-lg bg-primary-dark p-16">
      <div>
        <img src={Avtar} alt="avatar" />
      </div>
      <div className="space-y-8">
        <Heading>
          <span className="text-stroke-dark">About</span>
          <span> Me</span>
        </Heading>
        <p className="font-medium leading-8 text-gray-300">
          <span>
            Hello there 👋! My name is Yogeshwar and I am a web developer with a
            passion for building sustainable front-end architectures.
          </span>
          <br />
          <span className="mt-1.5">
            I started my development journey with HTML and CSS
          </span>{" "}
          back in 2020, and I have been developing websites and web applications
          ever since.
        </p>
        <br />
        <a href={resume} download>
          <Button varient="outline" iconRight={<HiOutlineDownload size={20} />}>
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
