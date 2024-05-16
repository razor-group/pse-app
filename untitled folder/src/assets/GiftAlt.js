import * as React from "react";
const SvgGiftAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={17}
      height={3}
      x={3.5}
      y={9.5}
      stroke={props.color}
      strokeLinecap="round"
      rx={1.5}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      d="M5.5 12.5v5.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h6.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-5.8m-6-6v3h-3a3 3 0 1 1 3-3Zm0 1v2h2a2 2 0 1 0-2-2Zm0 2v12"
    />
  </svg>
);
export default SvgGiftAlt;
