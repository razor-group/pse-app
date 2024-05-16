import * as React from "react";
const SvgBasketAlt3 = (props) => (
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
      d="M3.5 4.5h1.558c.696 0 1.044 0 1.306.189s.372.519.592 1.179L7.5 7.5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.5 17.5H8.05c-.145 0-.218 0-.274-.006a1 1 0 0 1-.867-1.203 3.07 3.07 0 0 1 .081-.262v0c.052-.154.077-.231.106-.3a2 2 0 0 1 1.698-1.224c.074-.005.155-.005.317-.005H14.5"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M14.179 14.5h-3.041c-1.28 0-1.92 0-2.42-.33-.501-.33-.753-.918-1.257-2.094l-.169-.394c-.81-1.89-1.214-2.833-.77-3.508C6.968 7.5 7.996 7.5 10.05 7.5h5.28c2.3 0 3.449 0 3.883.747.433.747-.137 1.745-1.278 3.741l-.283.497c-.562.983-.843 1.475-1.309 1.745-.465.27-1.032.27-2.164.27Z"
    />
    <circle cx={17} cy={20} r={1} fill={props.color} />
    <circle cx={9} cy={20} r={1} fill={props.color} />
  </svg>
);
export default SvgBasketAlt3;
