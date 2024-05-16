import * as React from "react";
const SvgSortRandom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M3 7h1.78c2.152 0 3.228 0 4.1.456a4 4 0 0 1 1.005.749c.688.703.997 1.734 1.615 3.795s.928 3.092 1.615 3.795c.294.301.633.554 1.006.749.871.456 1.947.456 4.1.456H21m0 0-3-3m3 3-3 3"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="m21.354 6.646-3-3-.708.708L19.793 6.5h-1.597c-1.055 0-1.88 0-2.55.059-.682.06-1.241.184-1.757.454a4.498 4.498 0 0 0-1.187.9c.127.25.238.502.339.754l.111.291a2.6 2.6 0 0 1 .32-.404 3.5 3.5 0 0 1 .88-.655c.356-.186.77-.29 1.382-.344.62-.055 1.402-.055 2.486-.055h1.573l-2.147 2.146.708.707 3-3L21.707 7zm-11.056 9.44a8.937 8.937 0 0 1-.45-1.044 2.6 2.6 0 0 1-.32.404 3.498 3.498 0 0 1-.88.655c-.356.186-.77.29-1.382.344-.62.055-1.401.055-2.486.055H3v1h1.804c1.055 0 1.88 0 2.55-.059.682-.06 1.241-.184 1.757-.454a4.5 4.5 0 0 0 1.187-.9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSortRandom;