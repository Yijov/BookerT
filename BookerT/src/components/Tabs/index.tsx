import React, { ReactNode, useState } from "react";
import { useTheme } from "../../utils";
import "./index.css";

interface TabComponent {
  title: string;
  component: ReactNode;
}

interface TabComponentProps {
  tabs: TabComponent[];
}

export const Tab: React.FC<TabComponentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const {COMPONENT_BG_COLOR_Rv, FONT_COLOR, COMPONENT_BG_COLOR, COMPONENT_HIGHLIGHT_COLOR }=useTheme()
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div
      className="ads-dynamic-tab-container"
      style={{ color: FONT_COLOR, backgroundColor: COMPONENT_BG_COLOR }}
    >
      <div className="ads-tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? "ads-tab-active" : ""}
            style={
              index === activeTab
                ? {
                    color: FONT_COLOR,
                    borderBottom: "2px solid " + COMPONENT_BG_COLOR_Rv,
                    backgroundColor: COMPONENT_HIGHLIGHT_COLOR,
                  }
                : {}
            }
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="ads-tab-content">{tabs[activeTab].component}</div>
    </div>
  );
};
