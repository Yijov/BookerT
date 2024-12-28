import React, { useState, useRef } from "react";
import { IPopOver } from './IPopOver';
import './PopOver.css'; 
import { useTheme } from "../../utils";


export const Popover: React.FC<IPopOver> = ({ card, children, position = "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const {APP_BG_COLOR, FONT_COLOR}=useTheme()

  const togglePopover = () => setIsVisible(!isVisible);
  const hidePopover = () => setIsVisible(false);

  return (
    <div className="ads-popover-container" onMouseLeave={hidePopover}>
      <div className="ads-popover-trigger" onClick={togglePopover}>
        {children}
      </div>
      {isVisible && (
        <div style={{backgroundColor:APP_BG_COLOR, color:FONT_COLOR}}className={`ads-popover-content ads-popover-${position}`} ref={popoverRef}>
          {card}
        </div>
      )}
    </div>
  );
};

