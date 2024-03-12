/* eslint-disable react/prop-types */

const headingStyles =
  "font-montserrat text-white leading-relaxed font-bold uppercase tracking-wider";

const variants = {
  h1: "text-4xl lg:text-5xl",
  h2: "text-xl lg:text-3xl",
  h3: "text-lg lg:text-xl",
};

const Heading = ({ variant = "h2", children }) => {
  if (variant == "h1") {
    return (
      <h1
        className={`lg:leading-[4.5rem] ${headingStyles} ${variants[variant]}`}
      >
        {children}
      </h1>
    );
  }

  if (variant == "h2") {
    return (
      <h2 className={`${headingStyles} ${variants[variant]}`}>{children}</h2>
    );
  }

  return (
    <h3 className={` ${headingStyles} ${variants[variant]}`}>{children}</h3>
  );
};

export default Heading;
