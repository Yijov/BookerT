import { CSSProperties, ReactNode } from "react";

export interface ITile {
children?:ReactNode;
style?:CSSProperties;
disabled?:boolean;
}