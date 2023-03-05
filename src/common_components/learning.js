 import React from "react";
 import '../App.css';
 export const Learning=(props)=>{
    return(
        <div>
            <div className="a">
            <div className="learning_video">
                <img id='v_image1'src={props.src} alt="video"></img>
                <div className="text3">
                    <p id="text6">{props.para}</p>
                    <h3 id='heading'>{props.heading}</h3>
                    <div className="text5">
                        <p id="text4">{props.para1}</p>
                        <p id='time'>{props.time}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
