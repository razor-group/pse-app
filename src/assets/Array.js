import * as React from "react";
const SvgArray = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M15 5h5v10c0 1.886 0 2.828-.586 3.414C18.828 19 17.886 19 16 19h-1M9 5H6a2 2 0 0 0-2 2v12h5"
    />
  </svg>
);
export default SvgArray;
