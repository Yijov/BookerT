import React from 'react';
import { IIcon } from '../../IIcon';
import { useTheme } from '../../../../utils';

export const Avatar: React.FC<Partial<IIcon & { style?: React.CSSProperties }>> = ({
  color,
  size,
  style,
  onClick
}) => {
   const{ FONT_COLOR} =useTheme()
  return (
    <svg
      fill={color||FONT_COLOR}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '24'}
      height={size || '24'}
      stroke={color || 'currentColor'}
      style={style}
      onClick={onClick}
      className='ads-icon'
    >
      <title />

      <g data-name="Layer 2" id="Layer_2">
        <path
          fill={color|| FONT_COLOR}
          stroke={color || FONT_COLOR}
          d="M16,14a6,6,0,1,1,6-6A6,6,0,0,1,16,14ZM16,4a4,4,0,1,0,4,4A4,4,0,0,0,16,4Z"
        />

        <path
          fill={color || FONT_COLOR}
          stroke={color || FONT_COLOR}
          d="M24,30H8a2,2,0,0,1-2-2V22a7,7,0,0,1,7-7h6a7,7,0,0,1,7,7v6A2,2,0,0,1,24,30ZM13,17a5,5,0,0,0-5,5v6H24V22a5,5,0,0,0-5-5Z"
        />
      </g>
    </svg>
  );
};
