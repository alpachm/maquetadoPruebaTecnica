import { SVGProps } from "react";
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={29}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M16 2h-3.818a6.363 6.363 0 0 0-6.364 6.364v3.818H2v5.09h3.818v10.183h5.091V17.273h3.818L16 12.182h-5.09V8.364a1.273 1.273 0 0 1 1.272-1.273H16V2Z"
    />
  </svg>
);
export default FacebookIcon;
