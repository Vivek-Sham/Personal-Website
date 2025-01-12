import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M1 22h62v30H1zm6 0v-8h14V7H11V4M4 29h4m2 0h4m2 0h4m2 0h4m2 0h4m2 0h4m2 0h4m2 0h4m2 0h4M4 45h4m2 0h4m2 0h26m8 0h4m2 0h4m-16 0h4M8 37h4m2 0h4m2 0h4m2 0h4m2 0h4m2 0h4m2 0h4m2 0h4m2 0h4"
    />
  </svg>
);
export { SvgComponent as Keyboard };
