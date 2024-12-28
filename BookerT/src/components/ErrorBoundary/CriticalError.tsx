import React from "react";
import { Button } from "../Buttons";
import { Text } from "../Text";
import { useTheme } from '../../utils';
import "./index.css";

export const CriticalError: React.FC<{ reason?: string }> = ({ reason }) => {
  const reloadPage = () => window.location.reload();
  const { FONT_COLOR, COMPONENT_BG_COLOR } = useTheme();

  return (
    <section className="critical-error">
      <div className="error-container" style={{ backgroundColor: COMPONENT_BG_COLOR, color:FONT_COLOR  }}>
        <div className="title">
          <Text type="title">"Oops! something went wrong."</Text>
        </div>
        {reason ? (
          <Text type="body">{reason}</Text>
        ) : (
          <Text type="title">{"Please try again later."}</Text>
        )}
        <div className="btn-container">
          <Button onClick={() => reloadPage()} children="Reload Page" />
        </div>
      </div>
    </section>
  );
};
