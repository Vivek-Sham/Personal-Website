import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18zm-3 8a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2M16.5 13a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 1 0z" />
    <path d="M18.5 3a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 1 0zM20.5 21a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 1 0zM20.5 8a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 1 0z" />
  </svg>
);
export { SvgComponent as AI };
