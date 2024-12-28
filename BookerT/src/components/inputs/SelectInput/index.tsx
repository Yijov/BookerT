import React from "react";
import { useTheme } from './../../../utils/hooks/useTheme';

export const SelectInput: React.FC<{
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  required?: boolean;
  options?: any[];
  discriminator?: string;
  placeholder?: string;
}> = ({
  label = "Seleccione: ",
  onChange,
  value,
  required = false,
  options,
  discriminator,
  placeholder,
}) => {
  const { COMPONENT_BG_COLOR_Rv, COMPONENT_BG_COLOR, FONT_COLOR } = useTheme();
  // Sample data for options
  const optionsData =
    options?.map((opt) => (discriminator ? opt[discriminator] : opt)) || [];

  return (
    <>
      <label
        style={{ marginTop: "12px" }}
        htmlFor={"ads-select-input-label" + label}
      >
        <strong>{label}</strong>
      </label>
      <select
        id={"ads-select-input-label" + label}
        name={label}
        value={value}
        onChange={onChange}
        className="ads-select-input"
        style={{
          border: "none",
          borderBottom: "2px solid " + COMPONENT_BG_COLOR_Rv,
          width: "100%",
          outline: "none",
          marginBottom: "16px",
          marginTop: "6px",
          fontSize: "16px",
          color: FONT_COLOR,
          backgroundColor: COMPONENT_BG_COLOR,
        }}
        required={required}
      >
        <option value="">{placeholder || "Seleccione"}</option>
        {optionsData.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
