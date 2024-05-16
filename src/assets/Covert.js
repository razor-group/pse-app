import * as React from "react";
const SvgCovert = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 3.5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1"
    />
    <path
      stroke={props.color}
      strokeLinejoin="round"
      d="m18 4-2.214 3.986a1 1 0 0 1-.874.514H9.088a1 1 0 0 1-.874-.514L6 4m12 16-2.214-3.986a1 1 0 0 0-.874-.514H9.088a1 1 0 0 0-.874.514L6 20"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12.5v3"
    />
  </svg>
);
export default SvgCovert;
