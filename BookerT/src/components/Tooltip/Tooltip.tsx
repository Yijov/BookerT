import React, { useRef, useState } from 'react';
import { ITooltip } from './ITooltip';
import './Tooltip.css'; // Ensure to import the CSS for styling
import { useOutsideClick, useTheme } from '../../utils';

export const Tooltip: React.FC<ITooltip> = ({
  text,
  children,
  positionX = 'center',
  positionY = 'top',
  margin,
  bgColor,
  fontColor,
  disabled
}) => {
  const [visible, setVisible] = useState(false);
  const { FONT_COLOR_RV, APP_PRIMARY_COLOR } = useTheme();
  const toolTipRef = useRef<HTMLInputElement>(null);
  useOutsideClick(toolTipRef,() => setVisible(false) )
  const setPositionX = () => {
    switch (positionX) {
      case 'left':
        return 'translateX(-80%)';

      case 'right':
        return 'translateX(5%)';

      case 'center':
        return 'translateX(-50%)';

      default:
        return 'translateX(-50%)';
    }
  };
  const setPositionY = () => {
    switch (positionY) {
      case 'top':
        return '60%';

      case 'bottom':
        return '-20&';

      default:
        return '60%';
    }
  };

  return (
    <div
      className="ads-tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {!disabled && visible && (
        <div
          ref={toolTipRef}
          className="ads-tooltip"
          style={{
            transform: setPositionX(),
            bottom: setPositionY(),
            color: fontColor || FONT_COLOR_RV,
            background: bgColor || APP_PRIMARY_COLOR,
            margin
          }}
        >
          {' '}
          ,{text}
        </div>
      )}
    </div>
  );
};
