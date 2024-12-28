import React, {CSSProperties} from 'react'
export interface IText {
    children:React.ReactNode;
    type?:"body"|"title"|"sub_title"|"main"|"body-no-wrap";
    color?: CSSProperties["color"]
    margin?: CSSProperties["margin"]
    underline?:boolean;
    bold?: boolean;
    link?: boolean;
    onClick?: React.MouseEventHandler<HTMLHeadingElement>
}