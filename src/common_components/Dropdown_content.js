import React from "react";
import "./Dropdown_content.css";
export const Dropdown_content=(props)=>{
    return(
        <>
        <div className="dropdown_content">
        <h3 id="dropdown_content_heading">{props.heading}</h3>
        <h4 id="dropdown_button">{props.button_click}</h4>
        </div>
        </>
    )
}