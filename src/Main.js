import './App.css';
import React from 'react';
import My_learning from './components/my_learning';
//import { Header } from './common components/header';
import { Next_course } from './components/Next_course';
import { Suggestions } from './components/Suggestions';
// import {Footer} from './common components/Footer';
//import { Notification } from './components/notification';
import Categories from "./components/Catogories";
import Catogories_data from "./components/Catogories_data";
export function Main(){
    return(
        <>
        {/* <Header/> */}
        <div id="data">
            <Catogories_data/>
        </div>
        <div id="categories" >
            <Categories/>
        </div>
        <My_learning/>
        <Next_course/>
        <Suggestions/>
        
        </>
    )
}