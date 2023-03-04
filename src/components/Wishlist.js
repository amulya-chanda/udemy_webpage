import React from "react";
import "./Wishlist.css";
import search2 from '../assets/search2.jpg';
import {Suggested} from '../common components/Suggested_course';
import video9 from '../assets/video9.jpg';
import video10 from '../assets/video10.jpg';
import video11 from '../assets/video11.jpg';
import video17 from '../assets/video17.jpg';
export function Wishlist(){
    return(
        <>
        <div className="wishlist">
            <div className="learning1">
                <h1 id="heading2">My learning</h1>
                <div className="options">
                    <h2 id="all_courses"><a href="https://www.udemy.com/home/my-courses/learning/">
                    All Courses</a></h2>
                    <h2 id="my_list"> <a href="https://www.udemy.com/home/my-courses/lists/">My List</a></h2>
                    <h2 id="wish"><a href="https://www.udemy.com/home/my-courses/wishlist/">WishList</a></h2>
                    <h2 id="archieve"><a href="https://www.udemy.com/home/my-courses/archived/">Archieved</a></h2>
                    <h2 id="tools"><a href="https://www.udemy.com/home/my-courses/learning-tools/">Learning Tools</a></h2>
                </div>
            </div>
            <div className="search">
                <input id="search_courses"placeholder="Search my courses"></input>
                <img id="search_img" src={search2}></img>
            </div>
            <div className="wishlist_videos">
         <Suggested src={video9} alt="video" heading="Modern Javascript" para="The Net Ninja(Shaun Pelling)" rating="4.8 rated by (9964) users"money='&#x20B9;499'/>
         <Suggested src={video10} alt="video" heading="Javascript the complete guide" para="andrew neagoie"rating="4.6  rated by (25250) users" money="&#x20B9;3499"/>
         <Suggested src={video17} alt="video" heading="Build webApps with React" para="The Net Ninja(Shaun Pelling)" rating="4.6 rated by (3119) users"money="&#x20B9;3199"/>
         <Suggested src={video11} alt="video" heading="Javascript Bootcamp course" para="Colt Steele" rating="4.7 rated by (12376) users" money="&#x20B9;3099"/>
        </div>
        </div>
        </>    
    
    )
}