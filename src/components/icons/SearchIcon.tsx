import { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#272727"
      d="M22.243 20.35 19.08 17.2a10.56 10.56 0 0 0 2.253-6.533 10.667 10.667 0 1 0-10.666 10.666A10.56 10.56 0 0 0 17.2 19.08l3.15 3.163a1.33 1.33 0 0 0 1.893 0 1.332 1.332 0 0 0 0-1.893ZM2.667 10.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
    />
  </svg>
);
export default SearchIcon;
