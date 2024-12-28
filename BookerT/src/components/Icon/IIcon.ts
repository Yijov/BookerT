import { CSSProperties } from 'react';


export interface IIcon {
  name?:
    | 'edit'
    | 'bell'
    | 'trash'
    | 'refresh'
    | 'pdf'
    | 'excel'
    | 'caret-right'
    | 'caret-left'
    | 'ban'
    | 'filter'
    | 'cog'
    | 'avatar'
    | 'sort'
    | 'book-logo'
    | 'book'
    | 'block';
  size?: number | CSSProperties["fontSize"];
  disabled?: boolean;
  border?: 'squared' | 'rounded' | 'none';
  color?: CSSProperties['color'];
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined;
}
