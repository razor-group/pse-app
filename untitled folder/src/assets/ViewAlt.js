import * as React from "react";
const SvgViewAlt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={2.5} stroke={props.color} />
    <path
      stroke={props.color}
      d="M18.227 11.38c.128.254.192.38.192.62s-.064.366-.192.62C17.6 13.853 15.812 16.5 12 16.5c-3.812 0-5.6-2.647-6.227-3.88-.128-.254-.193-.38-.193-.62s.065-.366.193-.62C6.4 10.147 8.188 7.5 12 7.5c3.812 0 5.6 2.647 6.227 3.88Z"
    />
    <path
      stroke={props.color}
      strokeLinecap="round"
      d="M17.5 3.5h.2c1.791 0 2.687 0 3.244.556.556.557.556 1.453.556 3.244v.2m-4 13h.2c1.791 0 2.687 0 3.244-.556.556-.557.556-1.453.556-3.244v-.2m-15-13h-.2c-1.791 0-2.687 0-3.243.556C2.5 4.614 2.5 5.51 2.5 7.3v.2m4 13h-.2c-1.791 0-2.687 0-3.243-.556C2.5 19.387 2.5 18.49 2.5 16.7v-.2"
    />
  </svg>
);
export default SvgViewAlt;
