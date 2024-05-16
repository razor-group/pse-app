import * as React from "react";
const SvgImgLoadBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M3 13v-2c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-1"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="m18.998 14.29-.595-.594-.01-.01c-.069-.069-.115-.115-.154-.15a2.5 2.5 0 0 0-3.976.82l-.007.013-.04.08a.5.5 0 0 1-.802.098 3.233 3.233 0 0 1-.058-.067L8.38 8.674a.5.5 0 0 0-.76.651l4.976 5.806.008.008a1.5 1.5 0 0 0 2.486-.205c.016-.028.034-.064.056-.108l.005-.01c.052-.104.07-.141.085-.167a1.5 1.5 0 0 1 2.327-.377l.133.131 1.28 1.28c.013-.41.019-.871.022-1.393"
      clipRule="evenodd"
    />
    <circle cx={16.5} cy={7.5} r={1.5} fill={props.color} />
    <path
      fill={props.color}
      d="M8 16v-.5h.5v.5zm-4.688 4.39a.5.5 0 1 1-.624-.78zM7.5 21v-5h1v5zm.5-4.5H3v-1h5zm.312-.11-5 4-.624-.78 5-4z"
    />
  </svg>
);
export default SvgImgLoadBox;
