import { SVGProps } from "react";
const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m18.2 11.585-4.725 2.7v-5.4l4.725 2.7Z"
    />
    <path
      stroke={props.color}
      strokeWidth={2.5}
      d="M2 12.54v-1.91C2 6.72 2 4.767 3.222 3.51c1.223-1.258 3.147-1.313 6.996-1.421C12.042 2.037 13.905 2 15.5 2c1.595 0 3.458.037 5.282.089 3.849.108 5.773.163 6.996 1.42C29 4.767 29 6.721 29 10.63v1.911c0 3.909 0 5.863-1.222 7.12-1.223 1.258-3.147 1.313-6.996 1.422-1.824.051-3.687.088-5.282.088-1.595 0-3.458-.037-5.282-.088-3.849-.11-5.773-.164-6.996-1.421C2 18.403 2 16.449 2 12.54Z"
    />
  </svg>
);
export default YoutubeIcon;
