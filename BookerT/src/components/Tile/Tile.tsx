import React, { CSSProperties } from 'react';
import { useTheme } from '../../utils';
import { ITile } from './ITile';
import { useDisabledStyle } from '../_common/css/hooks';

export const Tile: React.FC<ITile> = ({ children, style, disabled }) => {
  const { FONT_COLOR, COMPONENT_BG_COLOR } = useTheme();
  const disableStyles = useDisabledStyle(disabled)
  const color = FONT_COLOR;
  const backgroundColor = COMPONENT_BG_COLOR;

  const tileStyle: CSSProperties = {
    margin: '8px',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid lightgray',
    width: '100%',
    backgroundColor,
    color,
    ...style,
    ...disableStyles
  };
  return (
    <section style={tileStyle} className={'ads-tile'}>
      {children}
    </section>
  );
};
