import React from "react";
import '../App.css';
import {Learning} from '../common components/learning';
import video1 from '../assets/video1.jpg';
import video2 from '../assets/video2.jpg';
import video3 from '../assets/video3.jpg';
import video4 from '../assets/video4.jpg';
import video5 from '../assets/video5.jpg';
import video6 from '../assets/video6.jpg';
import video7 from '../assets/video7.jpg';
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
                <Learning src={video4} alt="video" para='Database Design and MySQL' heading='98.Full text Search Index' para1='Lecture •'time='5m'/>
                <Learning src={video5} alt="video" para='EMMET HTML&css workflow' heading='16.Matching Tags' para1='Lecture •' time='2m'/>
                <Learning src={video6} alt="video" para='Learn angular 4 from scratch'heading='Installing Angular 4' para1='Lecture •'time='8m'/>
                <Learning src={video7} alt="video" para='Getting started with Blazemeter'heading='1.Blazemeter Overview' para1='Lecture •'time='10m'/>
            </div>
        </div>
    )
}
export default My_learning