import React from "react";
import '../App.css';
export function Suggested(props){
    return(
        <>
        <div className="suggested_courses">
            
            <img id="suggested_image" src={props.src}></img>
            <h3 id="image_text">{props.heading}</h3>
            <p id="image_text1">{props.para}</p>
            <p id="image_text2">{props.rating}</p>
            <p id="image_text3">{props.money}</p>
            
        </div>
        </>
    )
}