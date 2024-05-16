import * as React from "react";
const SvgSertificate = (props) => (
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
      d="M18.5 9.5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.98 5.5 16.42 5.5 15.3 5.5H7.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4.5 7.02 4.5 7.58 4.5 8.7v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h5.8m-6-3h4m-4-4h7"
    />
    <circle cx={17.5} cy={13.5} r={2} stroke={props.color} />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M19.5 18.5s-.5-1-2-1-2 1-2 1"
    />
  </svg>
);
export default SvgSertificate;