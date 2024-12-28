import React from 'react';
import { IIcon } from '../../IIcon';

export const CaretRight: React.FC<Partial<IIcon & { style?: React.CSSProperties }>> = ({
  color,
  size,
  style,
  onClick
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '30'}
      height={size || '30'}
      stroke={color || 'currentColor'}
      fontSize={"40px"}
      style={style}
      onClick={onClick}
      className='ads-icon'
    >
      <g id="Arrow / Caret_Right_SM">
        <path
          id="Vector"
          d="M11 9L14 12L11 15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
