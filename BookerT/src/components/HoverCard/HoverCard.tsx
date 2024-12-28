import React, { useState } from 'react';
import { IHooverCard } from './IHoverCard';
import { useTheme } from '../../utils';
import './HoverCard.css'; 

export const HoverCard: React.FC<IHooverCard> = ({
  card,
  children,
  positionX = 'center',
  positionY = 'top',
  bgColor,
  fontColor
}) => {
  const [visible, setVisible] = useState(false);
  const { FONT_COLOR,COMPONENT_BG_COLOR } =
    useTheme();
  const setPositionX = () => {
    switch (positionX) {
      case 'left':
        return 'translateX(-80%)';

      case 'right':
        return 'translateX(10%)';

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
      className="ads-hover_card-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className="ads-hover_card"
          style={{
            transform: setPositionX(),
            bottom: setPositionY(),
            color: fontColor|| FONT_COLOR,
            background:bgColor||COMPONENT_BG_COLOR
          }}
        >  ,
  
          {card}
        </div>
      )}
    </div>
  );
};


