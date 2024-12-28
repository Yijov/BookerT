import { CSSProperties, ReactNode } from "react";

export interface IButton{
    children:ReactNode;
    type?:"primary"|"secundary";
    shape?:"square"|"rounded";
    size?:"ss" | "sm" | "md" | "lg" | "xl";
    bgColor?:CSSProperties["backgroundColor"];
    fntColor?:CSSProperties["color"];
    disabled?:boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>;


}