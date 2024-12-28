import React from "react";
import { ISpinner } from "./ISpinner";
import "./Spinner.css";

export const Spinner:React.FC<ISpinner> = ({size = "m"}) => {
  const style=translateSize(size)
  return (
    <div style={style} className="ads-spinner-container">
      <div style={style} className="ads-spinner"></div>
    </div>
  );
};

const translateSize=(size:ISpinner["size"])=>{

  switch (size) {
    case "sssss":
      return {width:"10px", height:"10px" };

    case "ssss":
      return {width:"15px", height:"15px" };

    case "sss":
      return {width:"20px", height:"20px" };

    case "ss":
    return {width:"25px", height:"25px" };
    
    case "s":  
    return {width:"35px", height:"35px" };
    
    case "m":  
    return {width:"50px", height:"50px" };
  
    default:
      return {width:"50px", height:"50px" };
  }


}
