import React from 'react';
import { IIcon } from '../../IIcon';

export const Ban: React.FC<Partial<IIcon & { style?: React.CSSProperties }>> = ({
  color,
  size,
  style,
  onClick
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '24'}
      height={size || '24'}
      stroke={color || 'currentColor'}
      style={style}
      onClick={onClick}
      className='ads-icon'
    >
      <path
        d="M5.63605 5.63603L18.364 18.364M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
