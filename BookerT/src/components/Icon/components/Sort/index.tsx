import React from 'react';
import { IIcon } from '../../IIcon';
import { useTheme } from '../../../../utils';

export const Sort: React.FC<Partial<IIcon & { style?: React.CSSProperties }>> = ({
  size,
  color,
  style,
  onClick
}) => {
  const {FONT_COLOR}=useTheme()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '24'}
      height={size || '24'}
      stroke={color || FONT_COLOR}
      style={style}
      onClick={onClick}
      className='ads-icon'
    >
      <path
        fill={color||FONT_COLOR}
        opacity="0.6"
        d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125"
        stroke={color||FONT_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill={color||FONT_COLOR}
        d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875"
        stroke={color||FONT_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
