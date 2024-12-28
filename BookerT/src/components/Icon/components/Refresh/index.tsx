import React from 'react';
import { IIcon } from '../../IIcon';

export const Refresh: React.FC<Partial<IIcon & { style?: React.CSSProperties }>> = ({
  size,
  color,
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
        d="M11 2L13 3.99545L12.9408 4.05474M13 18.0001L11 19.9108L11.0297 19.9417M12.9408 4.05474L11 6M12.9408 4.05474C12.6323 4.01859 12.3183 4 12 4C7.58172 4 4 7.58172 4 12C4 14.5264 5.17107 16.7793 7 18.2454M17 5.75463C18.8289 7.22075 20 9.47362 20 12C20 16.4183 16.4183 20 12 20C11.6716 20 11.3477 19.9802 11.0297 19.9417M13 22.0001L11.0297 19.9417"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
