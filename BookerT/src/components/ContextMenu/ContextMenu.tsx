import React, { useState, useRef, useEffect } from "react";
import { IContextMenu } from "./IContextMenu";
import "./ContextMenu.css";


const ContextMenu: React.FC<IContextMenu> = ({ options, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsVisible(true);
    setMenuPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (contextMenuRef.current && !contextMenuRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="context-menu-wrapper" onContextMenu={handleContextMenu}>
      {children}
      {isVisible && (
        <div
          className="context-menu"
          ref={contextMenuRef}
          style={{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="context-menu-option"
              onClick={() => {
                option.action();
                setIsVisible(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContextMenu;