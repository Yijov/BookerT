import React from 'react';
import { IIcon } from '../../IIcon';

export const CaretLeft: React.FC<Partial<IIcon & { style?: React.CSSProperties }>> = ({
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
      fontSize={'40px'}
      style={style}
      onClick={onClick}
      className='ads-icon'
    >
      <g id="Arrow / Caret_Left_SM">
        <path
          id="Vector"
          d="M13 15L10 12L13 9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
