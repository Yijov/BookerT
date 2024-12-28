import React from "react";
import { IIcon } from "../../IIcon";

export const BookLogo: React.FC<
  Partial<IIcon & { style?: React.CSSProperties }>
> = ({ color, size, style, onClick }) => {
  return (
    <svg
      width={size || "30"}
      height={size || "30"}
      stroke={color || "currentColor"}
      fontSize={"40px"}
      style={style}
      onClick={onClick}
      className="ads-icon"
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2H3.58579C4.49129 2 5.35971 2.35971 6 3C6.64029 3.64029 7 4.50871 7 5.41421V11H9V5.41421C9 4.50871 9.35971 3.64029 10 3C10.6403 2.35971 11.5087 2 12.4142 2H16V13H11L9 15H7L5 13H0V2Z"
        fill={color}
      />
    </svg>
  );
};
