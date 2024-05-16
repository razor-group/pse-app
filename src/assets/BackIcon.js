import * as React from "react"
const BackIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
  
    fill="none"
    viewBox={"0 0 23 20"}
    width={"23"}
    height={"18"}
    {...props}
  >
    <path
      fill={props.color}
      d="M10.25 6.875 6.5 10.037l3.75 3.088v-2.5h6.25v-1.25h-6.25v-2.5Z"
    />
    <rect width={22} height={19} x={0.5} y={0.5} stroke={props.color} rx={3.54} />
  </svg>

  
)
export default BackIcon
