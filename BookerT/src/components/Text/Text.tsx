import React, {CSSProperties} from 'react'
import { IText} from './IText'
import { useTheme } from '../../utils/hooks/useTheme';

export const Text:React.FC<IText> = ({children, type, bold, color, underline, link, margin, onClick}) => {
        const{FONT_COLOR}= useTheme()
        const fontWeight= bold? "bolder":"normal";
        const textDecoration= underline||link? "underline":"";
        const cursor= link? "pointer":"";
        const style:CSSProperties={color: color||FONT_COLOR, fontWeight, textDecoration, cursor, margin}
    switch (type) {
        case 'main':
           return  <h1 onClick={onClick} style={{...style, fontSize:"clamp(18px, 2vw, 26px)"}}>{children}</h1>
        case 'title':
           return  <h2 onClick={onClick} style={{...style, fontSize:"clamp(16px, 1.6vw, 23px)"}}>{children}</h2>
        case 'sub_title':
           return  <h3 onClick={onClick} style={{...style, fontSize:"clamp(14px, 1.3vw, 20px)"}}>{children}</h3>
        case 'body':
           return  <p onClick={onClick} style={{...style, fontSize:"clamp(10px, 1.1vw, 17px)"}}>{children}</p>
        case 'body-no-wrap':
           return  <p onClick={onClick} style={{...style, fontSize:"clamp(10px, 1.1vw, 17px)", whiteSpace:"nowrap"}}>{children}</p>
        default:
            return <p  onClick={onClick} style={{...style, fontSize:"clamp(10px, 1.1vw, 17px)"}}>{children}</p>
    } 

}


  
