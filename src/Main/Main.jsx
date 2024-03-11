import Button from "../components/Button/Button";
import { FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-max-w-6.5 relative">
      <div className="flex h-[82vh] flex-col items-center justify-center">
        <div>
          <span className="flex gap-3">
            <h1 className="text-stroke-dark text-6xl font-bold uppercase">
              Yogeshwar
            </h1>
            <h1 className="text-6xl font-bold uppercase text-white">KHurmi</h1>
          </span>
          <h3 className="my-3 text-2xl font-semibold uppercase text-gray-300">
            Front End Developer
          </h3>
          <div className="flex h-full items-end">
            <span className="space-x-4">
              <a href="#projects">
                <Button varient={"outline"}>See My Work</Button>
              </a>
              <Button varient={"outline"} className={"border-white"}>
                Contact Me
              </Button>
            </span>
            <a href="https://github.com/ykverma99" className="absolute right-0">
              <Button
                varient={"flat"}
                className={"text-white"}
                leftIcon={<FaGithub size={25} />}
              >
                ykverma99
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
