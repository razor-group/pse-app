import * as React from "react";
const SvgPen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={16} height={4} x={4} y={16} stroke={props.color} rx={2} />
    <path
      stroke={props.color}
      d="M4.91 11.364 8 16h8l3.09-4.636c.436-.653.654-.98.618-1.335-.035-.356-.312-.633-.867-1.188L12 2 5.16 8.84c-.556.556-.833.833-.868 1.189-.036.356.182.682.617 1.335Z"
    />
    <circle cx={12} cy={11} r={2.5} stroke={props.color} />
    <path stroke={props.color} d="M12 2v7" />
  </svg>
);
export default SvgPen;
