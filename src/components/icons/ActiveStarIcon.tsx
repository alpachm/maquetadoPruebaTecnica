import { SVGProps } from "react";
const ActiveStarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FFE605"
        d="M.885 8.267 3.258 10l-.901 2.791a2.119 2.119 0 0 0 .789 2.41 2.118 2.118 0 0 0 2.533-.014L8 13.48l2.322 1.705a2.152 2.152 0 0 0 3.322-2.394l-.901-2.79 2.373-1.734a2.152 2.152 0 0 0-1.267-3.888h-2.915l-.884-2.757a2.151 2.151 0 0 0-4.098 0l-.884 2.757H2.154A2.151 2.151 0 0 0 .887 8.267H.885Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ActiveStarIcon;
