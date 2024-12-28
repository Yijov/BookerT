import React from 'react';
import { useLocation } from 'react-router-dom';
import { Icon, Popover, Text } from '../../components';
import { useTheme } from '../../utils';
export interface IHeaderprops {
  actions?: React.ComponentType<any>[];
}
export const Header: React.FC<IHeaderprops> = ({ actions }) => {
  const { COMPONENT_BG_COLOR } = useTheme();
  const location = useLocation();
  return (
    <header className="ads-header" style={{ backgroundColor: COMPONENT_BG_COLOR }}>
      {/* header content goes here */}
      <Text>{location.pathname.toUpperCase().slice(1).replace('/', '>')}</Text>

      <div className="ads-header-actions">
        {actions && actions.map((Action, index) => <Action key={index} />)}
        <Popover card={<div>Hello...</div>}>
            <Icon name="cog" size={22}/>
        </Popover>
        <Popover card={<div>Hello...</div>}>
            <Icon name="avatar"  />
        </Popover>
      </div>
    </header>
  );
};
