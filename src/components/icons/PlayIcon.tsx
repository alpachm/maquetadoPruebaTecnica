import { SVGProps } from "react";
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="#1E1E1E"
      d="M22.5 11.402c2 1.155 2 4.041 0 5.196L4.5 26.99c-2 1.155-4.5-.288-4.5-2.598V3.608C0 1.298 2.5-.145 4.5 1.01l18 10.392Z"
    />
  </svg>
);
export default PlayIcon;
