import * as React from "react";
const SvgAtom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={1} fill={props.color} />
    <path
      stroke={props.color}
      d="M16.5 12c0 2.7-.548 5.12-1.412 6.848C14.21 20.604 13.09 21.5 12 21.5s-2.21-.896-3.088-2.652C8.048 17.12 7.5 14.7 7.5 12s.548-5.12 1.412-6.847C9.79 3.396 10.91 2.5 12 2.5s2.21.896 3.088 2.653C15.952 6.879 16.5 9.299 16.5 12Z"
    />
    <path
      stroke={props.color}
      d="M14.25 15.897c-2.339 1.35-4.709 2.086-6.636 2.201-1.96.118-3.297-.405-3.841-1.348-.545-.944-.33-2.362.753-4.001 1.063-1.61 2.885-3.296 5.224-4.646 2.339-1.35 4.709-2.086 6.636-2.201 1.96-.118 3.297.405 3.841 1.348.545.943.33 2.362-.753 4-1.063 1.612-2.885 3.297-5.224 4.647Z"
    />
    <path
      stroke={props.color}
      d="M14.25 8.103c-2.339-1.35-4.709-2.086-6.636-2.201-1.96-.118-3.297.405-3.841 1.348-.545.943-.33 2.362.753 4 1.063 1.612 2.885 3.297 5.224 4.647 2.339 1.35 4.709 2.086 6.636 2.201 1.96.118 3.297-.405 3.841-1.348.545-.943.33-2.362-.753-4-1.063-1.612-2.885-3.297-5.224-4.647Z"
    />
  </svg>
);
export default SvgAtom;
