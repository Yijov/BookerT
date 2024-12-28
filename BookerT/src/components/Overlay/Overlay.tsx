import React from "react";
import { OverlayProps } from "./OverlayProps";
import { Spinner } from "../Spinner";
import "./Overlay.css";

export const Overlay: React.FC<OverlayProps> = ({ loading = false }) => {
  return <div className="ads-overlay">{loading && <Spinner />}</div>;
};
