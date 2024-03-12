/* eslint-disable react/prop-types */

const Skill = ({ name, icon }) => {
  return (
    <li className="flex flex-col items-center justify-center gap-5 transition-all hover:scale-110">
      <div className="text-gray-100">{icon}</div>
      <p className="text-sm font-semibold capitalize leading-loose text-gray-300">
        {name}
      </p>
    </li>
  );
};

export default Skill;
