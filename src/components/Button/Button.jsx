/* eslint-disable react/prop-types */

import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const varients = cva(
  [
    "inline-flex item-center justify-center gap-3 rounded-md hover:brightness-[.96] hover:scale-[1.02] cursor-pointer active:-translate-y-0.5",
  ],
  {
    variants: {
      varient: {
        fill: ["bg-blue-500 font-semibold text-white border-accent-light"],
        outline: ["border-accent-dark border text-accent-dark"],
        flat: [
          "dark:bg-secondary-dark dark:border-secondary-dark text-accent-dark brder-blue-50",
        ],
      },
      size: {
        sm: ["p-2 text-xs font-medium md:px-4"],
        base: ["p-3 text-sm font-medium md:px-6 md:text-base"],
        lg: ["p-4 text-sm font-bold md:px-8 md:text-xl"],
      },
    },
    defaultVariants: {
      varient: "fill",
      size: "base",
    },
  },
);

const defaultElement = "button";
const Button = ({
  as,
  children,
  className,
  icon,
  leftIcon,
  rightIcon,
  varient,
  size,
  onClick,
  ...restprops
}) => {
  let Component = as || defaultElement;
  return (
    <Component
      {...restprops}
      onClick={onClick}
      className={twMerge(varients({ varient, size, className }))}
    >
      {leftIcon != null ? <span>{leftIcon}</span> : null}
      {icon || children}
      {rightIcon != null ? <span>{rightIcon}</span> : null}
    </Component>
  );
};

export default Button;
