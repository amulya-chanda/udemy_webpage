import React from "react";
import './notify.css'; 
//  import { Notifications } from '../components/Notifications';
export function Notify(props){
    console.log(props);
    return(
  
        <>
        
        
        <div className="notify">
            
            <img id="notify_img" src={props.src}/>
            <div className="notify_data">
            <div id="notify_text" > {props.title_heading}</div>
            <div id="notify_days">{props.time}</div>
            </div>
        </div>
        </>
    )
}