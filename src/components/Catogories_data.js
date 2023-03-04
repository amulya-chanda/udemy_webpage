import React, {useState} from "react";
import { courses } from "./courses";
import "./Categories_data.css";

const  Catogories_data=()=>{
    const [dropdown,setdropdown]=useState(false);
     const [list,setlist]=useState(false);
     const handlelisthover=(item,isEntering)=>{
        setlist(isEntering? item: null);
        setdropdown(isEntering);
     }
     return(
        <div className="contents">
            <div className="content">
                {courses.map((item)=>(
                <div key={item.id}
                className={`item ${list===item.id ? 'active':""}`}
                onMouseEnter={()=>handlelisthover(item.id,true)}
                onMouseLeave={()=>handlelisthover(item.id,false)}
            >
                {/* {item.category} */}
            </div>
           ) )}
            </div>
            {/* {dropdown && list !== null&&(
                <div className="dropdown_content">
                <div className="list">
                    <ul>
                        {courses.find((item)=>item.id===list).category.map((item) => (
                            <ul key={item}>{item}</ul>
                        ))}
                    </ul>
                    </div>
                    </div>
            )} */}
        </div>
     )
}
export default Catogories_data;