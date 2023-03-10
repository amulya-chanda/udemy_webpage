import React from "react";
import '../App.css';
import {Learning} from '../common_components/learning';
import video1 from '../assets/video1.jpg';
import video2 from '../assets/video2.jpg';
import video3 from '../assets/video3.jpg';
 function My_learning(){
    return(
        <div>
            <div className="learn">
                <h2>Let's start learning DIVAMI</h2>
                <a href="https://www.udemy.com/home/my-courses/">
                    <p>My learning</p>
                </a>
            </div>
            <div className="video">
                <Learning src={video1} alt="video" para='Code with Node JS-2021' heading='5.setting up Express with Express-generator' para1="Lecture  • "time='15m'/>
                <Learning src={video2} alt="video" para='Complete React Developer Course' heading='Section Intro:React Components' para1='Lecture  •'time='1m'/>
                <Learning src={video3} alt="video" para='Learn HTML5 from Scratch' heading='35.Resources Chapter1' para1='article •' time='1m'/>
                
            </div>
        </div>
    )
}
export default My_learning