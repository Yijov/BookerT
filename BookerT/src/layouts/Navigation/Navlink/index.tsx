import React, { ReactNode } from "react";
import { IIcon } from "../../../components/Icon/IIcon";
import { Icon } from "../../../components";
import { useTheme } from "../../../utils";
import "./index.css";




interface NavLinkProps {
  text: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: string;
  icon: IIcon["name"];
}

export const NavLink: React.FC<
  NavLinkProps & React.HTMLAttributes<HTMLLIElement>
> = ({ text, onClick, icon, size, ...props }) => {
  const { FONT_COLOR_RV } = useTheme();
  return (
    <li {...props}>
      <button
        className="ads-navlink-btn"
        onClick={onClick}
        style={{
          verticalAlign: "middle",
          color: FONT_COLOR_RV,
          fontSize: size,
        }}
      >
        <p style={{ fontSize: size }}>
          <Icon name={icon} size={18} color={FONT_COLOR_RV}/> {text}
        </p>
        <span></span>
      </button>
    </li>
  );
};
