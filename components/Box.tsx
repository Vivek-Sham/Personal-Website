import React, { ReactNode, HTMLAttributes } from "react";
import Icon from "@/components/PlusIcon";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div {...props} className={className}>
      {/* Top bar */}
      <div
        className={
          "border-x mx-[1rem] sm:mx-[2rem] lg:mx-[3rem] xl:mx-[4rem] h-[1rem] sm:h-[2rem] lg:h-[3rem] xl:h-[4rem]"
        }
      ></div>

      {/* Middle section */}
      <div className="border-y">
        <div className="border-x mx-[1rem] sm:mx-[2rem] lg:mx-[3rem] xl:mx-[4rem] bg-background relative">
          <div className="corners hidden lg:block">
            <Icon className="absolute h-6 w-6 -top-3 -left-3" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3" />
          </div>
          {children}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={
          "border-x mx-[1rem] sm:mx-[2rem] lg:mx-[3rem] xl:mx-[4rem] h-[1rem] sm:h-[2rem] lg:h-[3rem] xl:h-[4rem]"
        }
      ></div>
    </div>
  );
};

export default Box;
