import React from "react";
import video8 from '../assets/video8.jpg';
export function Next_course(){
    return(
        <div>
            <div className="next_course_text">
                <h1 id="text7">What To Learn Next</h1>
                <h2 id="text8">Our Top pick for you</h2>
            </div>
            <div className="next_course">
                <img id='next_course_image'src={video8} alt="pic"></img>
                <div className="image_text">
                    <h2 id="image_text"> The Modern Javascript Bootcamp</h2>
                    <p id="para">Learn Javascript by  building real world apps.Include 3 real world </p>
                    <p id="para">projects, 80 programming challanges ES6/ES7</p>
                    <p id="author">By Andrew Mead</p>
                    <p id="author">Updated November 2020 29.5 total hours • 155 Lectures • All levels</p>
                    4<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star "></span>
                    (12,725)
                    <div className="rupee">
                    <b>&#x20B9;499 </b><del>&#x20B9;1299</del>
                    </div>
                   
                </div>
            </div>
            <h2 id="heading1">Because you viewed
        <a href="https://www.udemy.com/course/modern-javascript /" >"The Modern Javascript Course"</a></h2>
        </div>
    )
}