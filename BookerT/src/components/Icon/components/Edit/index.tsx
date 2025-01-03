import React from 'react';
import { IIcon } from '../../IIcon';

export const Edit: React.FC<Partial<IIcon& {style?:React.CSSProperties}>> = ({ color, size, style, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-edit ads-icon"
      width={size || '24'}
      height={size || '24'}
      stroke={color || 'currentColor'}
      style={style}
      onClick={onClick}
      
    >
      <path
        fill={color}
        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      ></path>
      <path
        fill={color}
        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
      ></path>
    </svg>
  );
};
