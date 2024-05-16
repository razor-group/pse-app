import * as React from "react";
const SvgDimondAlt = (props) => (
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
      d="m12 20-7.32-9.15c-.333-.416-.5-.624-.544-.874-.044-.25.04-.503.208-1.008l.744-2.233c.44-1.32.66-1.98 1.184-2.357C6.796 4 7.492 4 8.883 4h6.234c1.391 0 2.087 0 2.61.378.525.377.745 1.037 1.185 2.357l.744 2.233c.168.505.252.757.208 1.008-.045.25-.211.458-.544.874zm0 0 3.5-11M12 20 8.5 9m11 1-4-1m0 0L14 5m1.5 4h-7M10 5 8.5 9m0 0-4 1"
    />
  </svg>
);
export default SvgDimondAlt;
