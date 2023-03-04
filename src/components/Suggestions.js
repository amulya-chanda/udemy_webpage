import React from "react";
import '../App.css';
import video9 from '../assets/video9.jpg';
import video10 from '../assets/video10.jpg';
import video11 from '../assets/video11.jpg';
import video17 from '../assets/video17.jpg';
import video12 from '../assets/video12.jpg';
import video13 from '../assets/video13.jpg';
import video14 from '../assets/video14.jpg';
import video15 from '../assets/video15.jpg';
import video16 from '../assets/video16.jpg';
import {Suggested} from '../common components/Suggested_course';
export function Suggestions(){
    return(
        <>
        
        <h2 id="heading1">Because you viewed
        <a href="https://www.udemy.com/course/modern-javascript /" >"The Modern Javascript Course"</a></h2>
        <div className="suggested_videos">
         <Suggested src={video9} alt="video" heading="Modern Javascript" para="The Net Ninja(Shaun Pelling)" rating="4.8 rated by (9964) users"money='&#x20B9;499'/>
         <Suggested src={video10} alt="video" heading="Javascript the complete guide" para="andrew neagoie"rating="4.6  rated by (25250) users" money="&#x20B9;3499"/>
         <Suggested src={video17} alt="video" heading="Build webApps with React" para="The Net Ninja(Shaun Pelling)" rating="4.6 rated by (3119) users"money="&#x20B9;3199"/>
         <Suggested src={video11} alt="video" heading="Javascript Bootcamp course" para="Colt Steele" rating="4.7 rated by (12376) users" money="&#x20B9;3099"/>
         <Suggested src={video15} alt="video" heading="Javascript Web Projects" para="andrew neagoie" rating="4.7 rated by (3358) users" money="&#x20B9;3199"/>
         <Suggested src={video12} alt="video" heading="Modern Javascript" para="The Net Ninja(Shaun Pelling)" rating="4.8 rated by (9964) users"money='&#x20B9;499'/>
         <Suggested src={video13} alt="video" heading="Javascript the complete guide" para="andrew neagoie"rating="4.6  rated by (25250) users" money="&#x20B9;3499"/>
         <Suggested src={video14} alt="video" heading="Build webApps with React" para="The Net Ninja(Shaun Pelling)" rating="4.6 rated by (3119) users"money="&#x20B9;3199"/>
         <Suggested src={video16} alt="video" heading="Javascript Bootcamp course" para="Colt Steele" rating="4.7 rated by (12376) users" money="&#x20B9;3099"/>
         </div>
         </>
    )
}