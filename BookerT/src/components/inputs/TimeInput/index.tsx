import React, { useRef } from "react";
import { useTheme } from "../../../utils";
import "./index.css";

export const TimeInput: React.FC<{
  label: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}> = ({ label, onChange, value, required }) => {
  const { COMPONENT_BG_COLOR_Rv, FONT_COLOR_RV } = useTheme();
  
  const inputRef = useRef<HTMLInputElement>(null); // Ref to the input elemen

  const handleLabelClick = async () => {
    // Focus on the input element when the label is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputFocus = async () => {
    // Focus on the input element when the label is clicked
    const button = document.querySelector(".ads-time-input");
    //@ts-ignore
    await button?.showPicker();
  };

  return (
    <div>
      <label
        className="ads-time-input_label"
        style={{
          backgroundColor:COMPONENT_BG_COLOR_Rv,
          color: FONT_COLOR_RV,
        }}
        htmlFor={"ads-timeInput" + label}
        onClick={handleLabelClick}
      >
        <strong>{label || "Seleccioone tiempo"}</strong>
      </label>
      <input
        type="time"
        name={label}
        id={"ads-timeInput" + label}
        style={{ border: "1px solid " + COMPONENT_BG_COLOR_Rv }}
        value={value}
        onFocus={handleInputFocus}
        onChange={onChange}
        className="ads-time-input"
        required={required}
      />
    </div>
  );
};
