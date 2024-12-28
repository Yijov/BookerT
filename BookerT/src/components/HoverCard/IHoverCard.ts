import { ReactNode } from "react";

export interface IHooverCard{
    card:ReactNode;
    positionX?:"right"|"left"|"center"
    positionY?:"bottom"|"top"
    fontColor?:string
    bgColor?:string
    children:ReactNode;
}