import * as React from "react";
const SvgImgOutBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color}
      d="M21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h1"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="m18.998 14.29-.595-.594-.01-.01c-.069-.069-.115-.115-.154-.15a2.5 2.5 0 0 0-3.976.82l-.007.013-.04.08a.5.5 0 0 1-.802.098 3.233 3.233 0 0 1-.058-.067L8.38 8.674a.5.5 0 0 0-.76.651l4.976 5.806.008.008a1.5 1.5 0 0 0 2.486-.205c.016-.028.034-.064.056-.108l.005-.01c.052-.104.07-.141.085-.167a1.5 1.5 0 0 1 2.327-.377l.133.131 1.28 1.28c.013-.41.019-.871.022-1.393"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M21 3v-.5h.5V3zm-4.688 4.39a.5.5 0 1 1-.624-.78zM20.5 8V3h1v5zm.5-4.5h-5v-1h5zm.312-.11-5 4-.624-.78 5-4z"
    />
  </svg>
);
export default SvgImgOutBox;