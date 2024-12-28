import React, { ReactNode } from "react";
import { useTheme } from "../../utils";

interface MainProps {
  children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  const { APP_BG_COLOR, FONT_COLOR } = useTheme();

  return (
    <main
      className="ads-content"
      style={{ backgroundColor: APP_BG_COLOR, color: FONT_COLOR }}
    >
      {/* Render the child component in the main area */}
      {children}
    </main>
  );
};
