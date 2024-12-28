import React, { CSSProperties } from 'react'
import { IButton } from './IButton'
import "./index.css";
import { useTheme } from '../../../utils';
export const Button:React.FC<IButton> = ({children, onClick, disabled, bgColor, fntColor, shape="rounded", type="primary", size="md"}) => {
    const{FONT_COLOR,FONT_COLOR_RV,APP_PRIMARY_COLOR_RV, APP_PRIMARY_COLOR}= useTheme()
    const fontSize = buttonSize(size);
    const borderRadius =shape==="rounded" ? "25px" :"8px";
    const backgroundColor =bgColor||(type==="primary" ? APP_PRIMARY_COLOR :APP_PRIMARY_COLOR_RV);
    const color = fntColor ||(type==="primary" ? FONT_COLOR_RV : FONT_COLOR);
    const style:CSSProperties={fontSize, borderRadius, color, backgroundColor}
  
  return (
    <button style={style} disabled={disabled}  onClick={onClick} className="sds-button">{children}</button>
  )
}


const buttonSize = (size: string) => {
    switch (size) {
      case "ss":
        return "10px";
      case "sm":
        return "12px";
      case "md":
        return "14px";
      case "lg":
        return "16px";
      case "xl":
        return "18px";
      default:
        return "14px";
    }
  };