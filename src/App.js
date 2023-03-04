import "./App.css";
import React from "react";
import { Main } from "./Main";
// import My_learning from './components/my_learning';
import { Header } from "./common components/header";
// import { Next_course } from './components/Next_course';
// import { Suggestions } from './components/Suggestions';
import { Footer } from "./common components/Footer";
import { Notify } from "./common components/notify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notifications } from "./components/Notifications";
import { Wishlist } from "./components/Wishlist";
//import { Learning } from './common components/learning';
// import {courses} from './courses';
// import { Categories } from './Catogories';

export function App() {
  return (
    <div>
      <div className="route">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="" element={<Main />}></Route>
            <Route exact path="/main" element={<Main />}></Route>
            <Route path="/notification" element={<Notifications/>}></Route>
            <Route path="/wishlist" element={<Wishlist/>}></Route>
            {/* <My_learning/>
        <Next_course/>
        <Suggestions/> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}
