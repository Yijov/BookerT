import React, { ReactNode } from "react";
import { Text } from "../../components";
import { NavLink } from "./Navlink";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../utils";
import { IIcon } from "../../components/Icon/IIcon";
import "./index.css";


export interface IRoute {
  name: string;
  icon: IIcon["name"];
  route: string;
}

export interface INavigationProps {
  routes: IRoute[];
  bottomRoute?: IRoute;
  appLogo?: ReactNode;
}
export const Navigation: React.FC<INavigationProps> = ({
  routes,
  bottomRoute,
  appLogo,
}) => {
  const navigate = useNavigate();
  const { APP_PRIMARY_COLOR, FONT_COLOR_RV } = useTheme();
  
  return (
    <aside className="ads-sidenav" style={{ backgroundColor: APP_PRIMARY_COLOR }}>
      {/* Your side navigation content goes here */}
      {!appLogo && (
        <Text type="title" margin={"auto" } color={FONT_COLOR_RV}>
           APPLOGO
        </Text>
      )}
      {typeof appLogo === "string" ? (
        <Text type="title" margin={"auto" } color={FONT_COLOR_RV}>{appLogo.toUpperCase()}</Text>
        
      ) : (
        appLogo
      )}

      <ul className="ads-aside-nav-links">
        {routes.map((link, index) => (
          <NavLink
            key={index}
            text={link.name}
            icon={link.icon}
            size="18px"
            onClick={() => navigate(link.route)}
          />
        ))}
        {bottomRoute && (
          <NavLink
            text={bottomRoute.name}
            icon={bottomRoute.icon}
            size="20px"
            style={{ marginTop: "auto" }}
            onClick={() => navigate(bottomRoute.route)}
          />
        )}
      </ul>
    </aside>
  );
};
