import "./App.css";
import React from "react";
import { Main } from "./Main";
import { Header } from "./common_components/header";
import { Footer } from "./common_components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notifications } from "./components/Notifications";
import { Wishlist } from "./components/Wishlist";
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
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}
