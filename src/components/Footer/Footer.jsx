import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiInstagram } from "react-icons/si";
import Avtar from "../../assets/images/avatar.svg";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center space-y-12 py-24">
      <div className="h-96 object-cover">
        <img src={Avtar} alt="yogesh avatar" className="h-full w-full" />
      </div>
      <div className="flex flex-col items-center gap-10">
        <p className="font-semibold leading-loose text-gray-300">
          Have any questions or just want to say hi?
        </p>
        <Button iconRight={<HiOutlineMail size={20} />}>Email Me</Button>
        <p className="leading-loose text-gray-300">
          or try one of the following
        </p>
        <div className="space-x-4">
          <a href="https://instagram.com/1_yogesh_verma/">
            <Button varient="flat">
              <SiInstagram size={20} />
            </Button>
          </a>
          <a href="https://github.com/ykverma99/">
            <Button varient="flat">
              <SiGithub size={20} />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
