import { SVGProps } from "react";
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M13 17.89a4.889 4.889 0 1 0 0-9.779 4.889 4.889 0 0 0 0 9.778Z"
    />
    <path
      stroke={props.color}
      strokeWidth={2.5}
      d="M2 17.889V8.11A6.111 6.111 0 0 1 8.111 2h9.778A6.111 6.111 0 0 1 24 8.111v9.778A6.111 6.111 0 0 1 17.889 24H8.11A6.111 6.111 0 0 1 2 17.889Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m19.722 6.29.013-.014"
    />
  </svg>
);
export default InstagramIcon;
