import React from 'react';
import { IIcon } from '../../IIcon';
import { useTheme } from '../../../../utils';

export const Bell: React.FC<Partial<IIcon& {style?:React.CSSProperties}>> = ({ color, size , style, onClick}) => {
  const {FONT_COLOR}=useTheme()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={'none'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bell ads-icon"
      width={size || '24'}
      height={size || '24'}
      stroke={color|| FONT_COLOR}
      style={style}
      onClick={onClick}
      
    >
      <path fill={color} stroke={color|| FONT_COLOR} d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path fill={color} stroke={color|| FONT_COLOR} d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );
};
