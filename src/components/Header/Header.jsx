import Button from "../Button/Button";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="flex items-center justify-around py-8">
      <h2 className="text-3xl font-semibold uppercase tracking-wide text-white">
        Yogeshwar
      </h2>
      <Button varient={"outline"} icon={<IoMoonOutline />} />
    </nav>
  );
};

export default Header;
