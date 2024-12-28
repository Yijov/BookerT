import React, { ReactNode } from "react";
import { INavigationProps, Navigation } from "./Navigation";
import { Header, IHeaderprops } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import "./index.css"; // Import your layout styles

interface LayoutProps {
  children: ReactNode;
  sidenavConfig: INavigationProps;
  headerConfig?: IHeaderprops;
  footerLogo?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  sidenavConfig,
  headerConfig,
  footerLogo,
}) => {
  return (
    <div className="ads-layout">
      <Navigation {...sidenavConfig} />
      <div className="ads-main">
        <Header {...headerConfig} />
        <Main>{children}</Main>
        <Footer logo={footerLogo} />
      </div>
    </div>
  );
};
