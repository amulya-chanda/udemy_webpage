import React from "react";
import "./notification.css";
import {Notify} from '../common_components/notify'; 
 import notification_img from "../assets/notification_img.jpg";
 import notify_img from "../assets/notify_img.jpg";
export function Notifications(){
    return(
       <>
       
       <h1 id="heading1">NOTIFICATIONS</h1>
       <div className="notification1">
        <div className="notify1_img">
            <Notify src={notification_img} alt="pic" title_heading="Rayon Slim made an announcement: Hans peter luhn proposed a model to store information inside buckets in 1953" time="6 days ago" />
            
            <Notify src={notify_img} alt="pic" title_heading="in28 minutes Official made an announcement:I'm delighted to have the privilage of being instructer.Thanks for helping" time="8 days ago"/>
            <Notify src={notification_img} alt="pic" title_heading="Rayon Slim made an announcement: Hi everybody, I realeased a video on Youtube that teaches Big O and Time complexity" time="28 days ago"/>
        </div>
       </div>
       </> 
    )
}