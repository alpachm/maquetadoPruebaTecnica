import { SVGProps } from "react";
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M28 2.012S25.615 3.42 24.29 3.82A5.295 5.295 0 0 0 15 7.366v1.181A12.598 12.598 0 0 1 4.364 3.194S-.364 13.83 10.273 18.557A13.757 13.757 0 0 1 2 20.921c10.636 5.91 23.636 0 23.636-13.59a5.32 5.32 0 0 0-.094-.982C26.748 5.16 28 2.012 28 2.012Z"
    />
  </svg>
);
export default TwitterIcon;
