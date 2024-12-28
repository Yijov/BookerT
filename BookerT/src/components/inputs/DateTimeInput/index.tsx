import React, { useRef } from "react";
import { useTheme } from "../../../utils";
import "./index.css";

export const DateTimeInput: React.FC<{
  label: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}> = ({ label, onChange, value, required }) => {
  const { COMPONENT_BG_COLOR_Rv, FONT_COLOR_RV } = useTheme();
  
  const inputRef = useRef<HTMLInputElement>(null); // Ref to the input element

  const handleLabelClick = async () => {
    // Focus on the input element when the label is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputFocus = async () => {
    // Focus on the input element when the label is clicked
    const button = document.querySelector(".ads-date-time_picker__input");
    //@ts-ignore
    await button?.showPicker();
  };

  return (
    <>
      <label
        style={{
          backgroundColor: COMPONENT_BG_COLOR_Rv,
          color: FONT_COLOR_RV,
        }}
        className="ads-date-time_picker-label"
        htmlFor="input-date"
        onClick={handleLabelClick}
      >
        <strong>{label}</strong>
      </label>
      <input
        style={{ border: "1px solid " + COMPONENT_BG_COLOR_Rv }}
        type="datetime-local"
        ref={inputRef}
        name={"input-date-time" + label}
        id={"input-date-time" + label}
        min="1800-01-01"
        max="3000-01-01"
        onChange={onChange}
        onFocus={handleInputFocus}
        value={value}
        className="ads-date-time_picker__input"
        required={required}
      />
    </>
  );
};
