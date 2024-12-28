import { CSSProperties, ReactNode } from "react";

export interface IBadge {
    content: string | number|ReactNode;
    color?: string;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    positionConfig?: {top?:number, left?:number, right?:number, bottom?:number};
    children?: ReactNode;
    padding?:CSSProperties["padding"];
    fontSize?:CSSProperties["fontSize"];
  }
  