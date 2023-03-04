//import { App } from "./App";
import React,{useState} from "react";
// import Categories from "../components/Catogories";
// import Catogories_data from "../components/Catogories_data";
import logo_udemy from "../assets/logo_udemy.svg"; 
import search from "../assets/search.png";
import love from '../assets/love.png';
import bell from '../assets/bell.png';
import cart from '../assets/cart.png';
import user from '../assets/user.png';
import {Link} from "react-router-dom";
import '../App.css';
export function Header(){
    const [dropdown,setdropdown]=useState(false);
     const [list,setlist]=useState(false);
    return(
        <div>
        <div className="header">
            <div className="udemy_logo">
                <a href="http://localhost:3001/">    
                    <img src={logo_udemy} alt="logo"></img>
                </a>
            </div>
            <div className="categories" onMouseEnter={()=>dropdown(true)} onMouseLeave={()=>dropdown(false)}>
                <button className="button" type="button">Categories</button>
                {setdropdown && <courses/>}
            </div>
            <div className="search_bar">
                <img id="search"src={search} alt="search"></img>
                <input id="input"placeholder="Search for anything"></input>
            </div>
            <div className="udemy_bussiness">
                <button className="button" type="button">Udemy Business</button>
            </div>
            <div className="Teach on Udemy">
                <button className="button" type="button">Teach on Udemy</button>
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