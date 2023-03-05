
import React,{useState} from "react";
import logo_udemy from "../assets/logo_udemy.svg"; 
import search from "../assets/search.png";
import love from '../assets/love.png';
import bell from '../assets/bell.png';
import cart from '../assets/cart.png';
import user from '../assets/user.png';
import {Link} from "react-router-dom";
import '../App.css';
import Udemy_business from "../components/Udemy_business";
import Teach_on_udemy from "../components/Teach_on_udemy";
import Catogories_data from "../components/Catogories_data";

export function Header(){
    const [showbusinessdropdown,setshowbusinessdropdown]=useState(false);
     const [showteachdropdown,setshowteachdropdown]=useState(false);
    const [showcatogorydropdown,setshowcatogorydropdown]=useState(false);
    return(
        <div>
        <div className="header">
            <div className="udemy_logo">
                <a href="http://localhost:3000/">    
                    <img src={logo_udemy} alt="logo"></img>
                </a>
            </div>
            <div className="categories" >
            <nav onMouseEnter={()=> setshowcatogorydropdown(true)} onMouseLeave={()=> setshowcatogorydropdown(false)}>
                <button className="button" type="button">Categories</button>
             {showcatogorydropdown && <Catogories_data/>} 
             </nav>  
            </div>
            <div className="search_bar">
                <img id="search"src={search} alt="search"></img>
                <input id="input"placeholder="Search for anything"></input>
            </div>
            <div className="udemy_bussiness">
            <nav onMouseEnter={()=> setshowbusinessdropdown(true)} onMouseLeave={()=> setshowbusinessdropdown(false)}>
                <button className="button" type="button">Udemy Business</button>
                {showbusinessdropdown && <Udemy_business />}
                </nav>
            </div>
            <div className="Teach on Udemy">
            <nav onMouseEnter={()=> setshowteachdropdown(true)} onMouseLeave={()=> setshowteachdropdown(false)}> 
                <button className="button" type="button">Teach on Udemy</button>
                {showteachdropdown && <Teach_on_udemy/>}
                </nav>
            </div>
            <div className="My learning">
                <button className="button" type="button">My learning</button>
            </div>
            <nav className="wishlist">
                <Link to="wishlist">
                <a href="https://www.udemy.com/home/my-courses/wishlist/">
                    <img id='wishlist'src={love} alt="love"></img>
                </a>
                </Link>
            </nav>
            <div className="cart">
                <a href="https://www.udemy.com/home/my-courses/wishlist/">
                    <img id='cart'src={cart} alt="cart"></img>
                </a>
            </div>
            <nav className="notification">
                <Link to="notification">
                <a href="https://www.udemy.com/home/my-courses/wishlist/">
                    <img id='bell'src={bell} alt="bell"></img>
                </a>
                </Link>
            </nav>
            <div className="user">
              
                <a href="https://www.udemy.com/home/my-courses/wishlist/">
                    <img id='user'src={user} alt="user"></img>
                </a>
                
            </div>
            
        </div>
        
        </div>
    )
}