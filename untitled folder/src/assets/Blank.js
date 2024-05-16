import * as React from "react";
const SvgBlank = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M14.172 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v7.172c0 .408 0 .613-.076.796-.076.184-.22.329-.51.618l-4.828 4.828c-.29.29-.434.434-.617.51-.184.076-.389.076-.797.076Z"
    />
    <path
      stroke={props.color}
      d="M14 21v-4.667c0-1.1 0-1.65.342-1.991.341-.342.891-.342 1.991-.342H21"
    />
  </svg>
);
export default SvgBlank;
