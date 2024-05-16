import * as React from "react";
const SvgVideoFile = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M13.172 3H9c-1.886 0-2.828 0-3.414.586C5 4.172 5 5.114 5 7v10c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V8.828c0-.408 0-.613-.076-.796-.076-.184-.22-.329-.51-.618l-3.828-3.828c-.29-.29-.434-.434-.617-.51C13.785 3 13.58 3 13.171 3Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m13.855 14.08-3.182-1.363A1.2 1.2 0 0 0 9 13.82v2.36a1.2 1.2 0 0 0 1.673 1.103l3.182-1.364c.808-.346.808-1.492 0-1.838Z"
    />
    <path
      stroke={props.color}
      d="M13 3v4c0 .943 0 1.414.293 1.707C13.586 9 14.057 9 15 9h4"
    />
  </svg>
);
export default SvgVideoFile;