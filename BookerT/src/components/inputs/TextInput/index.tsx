import React from "react";
import { useTheme } from "../../../utils";

export const TextInput: React.FC<{
  placeholder?: string;
  value?: string;
  label?: string;
  required?: boolean;
  limit?: number;
  disabled?:boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ value, onChange, label, limit, placeholder = "", required, disabled }) => {
  const { COMPONENT_BG_COLOR_Rv } = useTheme();
  
  return (
    <>
      <label
        style={{ marginTop: "12px" }}
        htmlFor={"ads-text-input" + label}
        className="ads-text-input-label"
      >
        <strong>{label}</strong>
      </label>
      <input
      disabled={disabled}
        placeholder={placeholder}
        type="text"
        name={label}
        id={"ads-text-input" + label}
        value={value}
        onChange={onChange}
        className="ads-text-input"
        style={{
          border: "none",
          borderBottom: "2px solid " + COMPONENT_BG_COLOR_Rv,
          width: "100%",
          outline: "none",
          marginBottom: "16px",
          marginTop: "6px",
           background: disabled? "lightgray": ""
        }}
        maxLength={limit}
        required={required}
      />
    </>
  );
};
