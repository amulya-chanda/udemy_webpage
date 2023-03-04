import { courses } from "./courses";
import React, { useState }  from "react";
import backgrnd_image from "../assets/backgrnd_image.jpg";


export  default function Categories(){
    const [indexd,setIndexd]=useState(0);
    // const [dropdown,setdropdown]=useState(false);
    // const [list,setlist]=useState(null);
    const onHovermenu=(index)=>{
      setIndexd(index)
    }
    return(
        <>
        {/* {dropdown && } */}
         {/* <div className="" */}
        <div className="data">
        {courses.map((e,i)=>(
            
            <p onMouseOver={()=>{onHovermenu(i)}}>{e.category}</p>
        ))}
        
        <span className="tooltiptext">
            {courses[indexd].value.map((e)=>(
                <p>{e}</p>
            ) )}
        </span>
        </div>

        <div className="girl_image">
            <img src={backgrnd_image} alt="backgrnd"></img>
        </div>
        <div className="text">
            <div className="text2">
            <h1>Keep moving up</h1>
            </div>
            <div className="text1">
            <p>Learn the skills you need to take the next step — </p>
              <p>  and every step after. Courses from ₹499 through March 1.</p>
            </div>
        </div>
        </>
    )
}