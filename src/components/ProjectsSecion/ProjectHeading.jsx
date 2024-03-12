/* eslint-disable react/prop-types */

const ProjectHeading = ({ title, text }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-4xl font-bold uppercase text-white">{title}</h2>
      <p className="max-w-4xl tracking-wide text-gray-300">{text}</p>
    </div>
  );
};

export default ProjectHeading;
