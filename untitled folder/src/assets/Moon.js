import * as React from "react";
const SvgMoon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="m16.164 18.51.436-.245zm-.586 1.448-.143-.479.143.48Zm-.14-13.709.348.36-.347-.36Zm.726-.76.436.246-.436-.245Zm-.586-1.447-.143.479zM13.5 12c0-2.116.876-4.027 2.287-5.392l-.696-.718A8.476 8.476 0 0 0 12.5 12zm2.287 5.392A7.477 7.477 0 0 1 13.5 12h-1c0 2.398.994 4.566 2.591 6.11zM15 19.5A7.5 7.5 0 0 1 7.5 12h-1a8.5 8.5 0 0 0 8.5 8.5zM7.5 12A7.5 7.5 0 0 1 15 4.5v-1A8.5 8.5 0 0 0 6.5 12zm7.591 6.11c.22.213.377.365.488.48.122.124.15.166.149.165l.872-.49a1.953 1.953 0 0 0-.304-.373 22.974 22.974 0 0 0-.51-.5zM15 20.5c.264 0 .495.005.721-.063l-.286-.958c-.054.016-.115.021-.435.021zm.728-1.745a.5.5 0 0 1-.293.724l.286.958a1.5 1.5 0 0 0 .879-2.172zm.059-12.147c.215-.208.385-.372.51-.5.114-.118.23-.245.303-.373l-.872-.49s-.027.04-.149.166c-.11.114-.268.266-.488.479zM15 4.5c.32 0 .38.005.435.02l.286-.957c-.226-.068-.457-.063-.721-.063zm1.6 1.235a1.5 1.5 0 0 0-.879-2.172l-.286.958a.5.5 0 0 1 .293.724z"
    />
  </svg>
);
export default SvgMoon;