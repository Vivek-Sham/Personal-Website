import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1rem"
    height="1rem"
    {...props}
  >
    <path fill="currentColor" d="M8 5v14l11-7z"></path>
  </svg>
);
export { SvgComponent as Bullet };
