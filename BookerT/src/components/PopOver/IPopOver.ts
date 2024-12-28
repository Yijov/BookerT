import { ReactNode } from "react";

export interface IPopOver{
    card: React.ReactNode; // Content inside the popover
    position?: "top" | "bottom" | "left" | "right"; // Popover position
    children:ReactNode;
}