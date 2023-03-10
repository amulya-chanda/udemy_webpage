import './App.css';
import React from 'react';
import My_learning from './components/my_learning';
import { Next_course } from './components/Next_course';
import { Suggestions } from './components/Suggestions';
import Categories from "./components/Catogories";
import Carousel from '@itseasy21/react-elastic-carousel'
export function Main(){
    return(
        <>
        <div id="categories" >
            <Categories/>
        </div>
        <Carousel>
        <My_learning/>
        <My_learning/>
        <My_learning/>
        </Carousel>
        <Next_course/>
        <Carousel>
        <Suggestions/>
        <Suggestions/>
        <Suggestions/>
        </Carousel>
        
        </>
    )
}