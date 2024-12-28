import { ReactNode } from "react";

export interface ITooltip{
    text:string;
    positionX?:"right"|"left"|"center"
    positionY?:"bottom"|"top"
    fontColor?:string
    bgColor?:string
    margin?:string
    disabled?:boolean
    children:ReactNode;
}