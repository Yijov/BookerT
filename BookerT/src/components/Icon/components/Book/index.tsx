import React from "react";
import { IIcon } from "../../IIcon";

export const Book: React.FC<
  Partial<IIcon & { style?: React.CSSProperties }>
> = ({ color, size, style, onClick }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '24'}
      height={size || '24'}
      stroke={color || 'currentColor'}
      style={style}
      onClick={onClick}
    
      className='ads-icon'
    >
      <path d="M11,22,2,20V2l9,2Zm2,0,9-2V2L13,4Z"  strokeWidth="2"/>
    </svg>
  );
};
