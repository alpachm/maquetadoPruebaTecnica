import { SVGProps } from "react";
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#B0B4B7"
      d="M4.568 15.625a2.409 2.409 0 0 1-1.414-.467 2.38 2.38 0 0 1-.887-2.702l.78-2.413L.993 8.542A2.417 2.417 0 0 1 2.42 4.174h2.513l.764-2.38a2.418 2.418 0 0 1 4.604 0l.766 2.38h2.513a2.417 2.417 0 0 1 1.426 4.368l-2.053 1.5.78 2.414A2.417 2.417 0 0 1 10 15.146l-2-1.471-2 1.471a2.413 2.413 0 0 1-1.432.479ZM2.42 6.174a.417.417 0 0 0-.247.754l2.638 1.927a1 1 0 0 1 .361 1.115l-1 3.1a.417.417 0 0 0 .644.466l2.593-1.907a1 1 0 0 1 1.185 0l2.593 1.907a.416.416 0 0 0 .644-.467l-1-3.1a1 1 0 0 1 .361-1.115l2.637-1.927a.418.418 0 0 0-.246-.754h-3.25a1 1 0 0 1-.952-.695L8.4 2.404a.417.417 0 0 0-.795 0L6.617 5.48a1 1 0 0 1-.95.695H2.42Z"
    />
  </svg>
);
export default StarIcon;
