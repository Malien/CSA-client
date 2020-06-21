import React from "react";
import classnames from "classnames";
import "./icons.sass";

interface LookingGlassProps {
  className?: string;
  strokeClassName?: string;
}

const LookingGlass: React.FC<LookingGlassProps> = ({ className, strokeClassName }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 97.03 124.76"
  >
    <g>
      <path
        className={classnames(strokeClassName, "icon-trace")}
        d="M70.37,83.56C90.21,72.62,90.53,48.5,90.53,48.5c-1-29-23-42-42-42s-43,13-42,42S35,87.94,35,87.94l-.39.32-15.92,30"
      />
    </g>
  </svg>
);

export default LookingGlass;
