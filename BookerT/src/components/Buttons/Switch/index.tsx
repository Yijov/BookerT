import React from "react";
import "./index.css"; // Import CSS for styling

export const Switch: React.FC<{
  value?: boolean;
  onChange?: (value: boolean) => void;
}> = ({ value = false, onChange }) => {



  return (
    <label className="ads-switch-button-switch">
      <input type="checkbox" checked={value} onChange={(e)=> onChange?.(e.target.checked)} />
      <span className="ads-switch-button-slider"></span>
    </label>
  );
};
