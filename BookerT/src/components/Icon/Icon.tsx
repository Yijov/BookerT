import React from 'react'
import { IIcon } from './IIcon'
import { Bell }from "./components/Bell"
import { Edit } from './components/Edit';
import { Trash } from './components/Trash';
import { Refresh } from './components/Refresh';
import { PDF } from './components/PDF';
import { Excel } from './components/Excel';
import { CaretRight } from './components/CaretRight';
import { CaretLeft } from './components/CaretLeft';
import { Ban } from './components/Ban';
import { Block } from './components/Block';
import { Filter } from './components/Filter';
import { Book } from './components/Book';
import { Avatar } from './components/Avatar';
import { Cog } from './components/Cog';
import { Sort } from './components/Sort';
import { BookLogo } from './components/BookLogo';
import { CSSProperties } from 'react';


export const Icon:React.FC<IIcon> = ({name, border="none",disabled=false,  ...props}) => {
  const borderStyle=()=>{
    const dordered= {border:"1px solid "+ (props.color||"gray"), padding:"2px"}
    if(border==="rounded") return {...dordered, borderRadius:"50%"} as CSSProperties;
    if(border==="squared") return {...dordered, borderRadius:"4px"} as CSSProperties;
    return {} as CSSProperties;
  }
  
  const disabledStyle=disabled ? {pointerEvents:"none", opacity: '0.6', border:"none"} as CSSProperties : {cursor:"pointer"}as CSSProperties
  const IconStyle= { ...borderStyle(), ...disabledStyle}

 switch (name) {
  case "bell":
    return <Bell style={IconStyle}  {...props} />;

  case "edit" :
    return <Edit style={IconStyle}  {...props}/>;

  case "trash" :
    return <Trash style={IconStyle}  {...props}/>;

  case "refresh" :
    return <Refresh style={IconStyle}  {...props}/>;

  case "pdf" :
    return <PDF style={IconStyle}  {...props}/>;

  case "excel" :
    return <Excel style={IconStyle}  {...props}/>;

  case "caret-right" :
    return <CaretRight style={IconStyle}  {...props}/>;
    
  case "caret-left" :
    return <CaretLeft style={IconStyle}  {...props}/>;

  case "filter" :
    return <Filter style={IconStyle}  {...props}/>;

  case "ban" :
    return <Ban style={IconStyle}  {...props}/>;

  case "block" :
    return <Block style={IconStyle}  {...props}/>;

    case "cog" :
    return <Cog style={IconStyle}  {...props}/>;

    case "avatar" :
    return <Avatar style={IconStyle}  {...props}/>;
    
    case "sort" :
    return <Sort style={IconStyle}  {...props}/>;
    case "book-logo" :
    return <BookLogo style={IconStyle}  {...props}/>;
    case "book" :
    return <Book style={IconStyle}  {...props}/>;

  default:
    <Bell style={IconStyle}  {...props} />
    break;
 }
}
