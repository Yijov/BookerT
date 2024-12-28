import React, { CSSProperties } from 'react';
import { IBadge } from './IBadge';


export const Badge: React.FC<IBadge> = ({
  content,
  color = "red",
  position = "top-right",
  padding="4px 8px",
  fontSize="0.75em",
  positionConfig,
  children
}) => {
  const badgeStyles: CSSProperties = {
    backgroundColor: color,
    color: "#fff",
    borderRadius: "50%",
    padding: padding,
    fontSize: fontSize,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  };

  const wrapperStyles: CSSProperties = {
    position: "relative",
    display: "inline-block",
    width: "fit-content"
  };

  const positionStyles: Record<string, CSSProperties> = {
    "top-right": { top: 4, right: -6 },
    "top-left": { top: 0, left: 0 },
    "bottom-right": { bottom: 0, right: 0 },
    "bottom-left": { bottom: 0, left: 0 },
  };

  return (
    <div style={wrapperStyles}>
      {children}
      <span style={{ ...badgeStyles, ...positionStyles[position], ...positionConfig }}>
        {content}
      </span>
    </div>
  );
};

