import * as React from "react";
const SvgAddSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M3.5 11c0-1.9.001-3.274.142-4.322.139-1.034.406-1.675.883-2.153.478-.477 1.119-.744 2.153-.883C7.726 3.502 9.1 3.5 11 3.5h2c1.9 0 3.274.001 4.323.142 1.033.139 1.674.406 2.152.883.477.478.744 1.119.883 2.153.14 1.048.142 2.422.142 4.322v2c0 1.9-.001 3.274-.142 4.323-.139 1.033-.406 1.674-.883 2.152-.478.477-1.119.744-2.152.883-1.049.14-2.423.142-4.323.142h-2c-1.9 0-3.274-.001-4.322-.142-1.034-.139-1.675-.406-2.153-.883-.477-.478-.744-1.119-.883-2.152C3.502 16.274 3.5 14.9 3.5 13z"
    />
    <path stroke={props.color} strokeLinejoin="round" d="M12 8v8m4-4H8" />
  </svg>
);
export default SvgAddSquare;
