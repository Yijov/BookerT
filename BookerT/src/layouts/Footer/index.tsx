import React from "react";
import { useTheme } from "../../utils";

export interface IFooterProps {
  logo?: React.ReactNode;
}
export const Footer: React.FC<IFooterProps> = ({ logo }) => {
  const { COMPONENT_BG_COLOR, FONT_COLOR } = useTheme();
  return (
    <footer
      className="ads-footer"
      style={{ backgroundColor: COMPONENT_BG_COLOR, color: FONT_COLOR }}
    >
      {/* footer content goes here */}
      {(logo && logo) || "FOOTER"}
    </footer>
  );
};

