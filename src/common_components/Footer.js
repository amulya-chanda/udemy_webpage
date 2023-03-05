import React from "react";
import './Footer.css';
import footer_pic from '../assets/footer_pic.svg';
import footer_pic1 from '../assets/footer_pic1.svg';
import footer_pic2 from '../assets/footer_pic2.svg';
import footer_pic3 from '../assets/footer_pic3.svg';
import footer_pic4 from '../assets/footer_pic4.svg';
import internet from '../assets/internet.jpg';
import logo from '../assets/logo.svg';
export function Footer(){
    return (
        <>
        <div className="footer">
           <div className="footer_text">
            <div className="text0">
            <div className="footer_heading">Teach the world online</div>
            <div id="footer_heading1">
                Create an online video course, reach students across the globe, and earn money
            </div>
            </div>
            <a id="text_link" href="https://www.udemy.com/teaching/?ref=bai-sub-footer"> <span>Teach on Udemy</span></a>
            
           </div>
           <div className="udemy_footer">
            <div className="footer_heading2"><span>Top Companies Choose  </span>  
            <a className="link1" href="https://www.udemy.com/udemy-business/?locale=en_US&path=request-demo-in-mx%2F&ref=footer-ad">Udemy Bussiness</a>
              <span> to build in demand career </span>
                <div >skills</div>
            </div>
            <div className="footer_image">
                <img id="footer_pic" src={footer_pic} alt="pic"></img>
                <img id="footer_pic1"src={footer_pic1} alt="pic"></img>
                <img id="footer_pic2"src={footer_pic2} alt="pic"></img>
                <img id="footer_pic3" src={footer_pic3} alt="pic"></img>
                <img id="footer_pic4"src={footer_pic4} alt="pic"></img>
            </div>
           </div>
           <div className="about_udemy">
            <ul>
            <li>
                    <a href="https://www.udemy.com/udemy-business/?locale=en_US&mx_pg=home-page&path=%2F&ref=footer">Udemy Bussiness</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Teach on Udemy</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Get the App</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">About Us</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Contact Us</a>
                </li>
            </ul>
            <ul>
            <li>
                    <a href="https://www.udemy.com/udemy-business/?locale=en_US&mx_pg=home-page&path=%2F&ref=footer">Careers</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Blog</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">help and Support</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Affiliate</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">investors</a>
                </li>
            </ul>
            <ul>
            <li>
                    <a href="https://www.udemy.com/udemy-business/?locale=en_US&mx_pg=home-page&path=%2F&ref=footer">Terms</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Privacy Policy</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Cookie Settings</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Sitemap</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/teaching/?ref=teach_footer">Accessibility Statement</a>
                </li>
            </ul>
           </div>
           <div className="language">
                <img src={internet} alt="pic"></img>
                <span>English</span>
            </div>
          <div className="footer_logo">
            <div className="udemy_logo1">
                <a href="https://www.udemy.com/">
                    <img src={logo} alt="pic"></img>
                </a>
            </div>
            <div className="copyright">
                @ 2023 Udemy,Inc.
            </div>
            </div>  
        </div>
        </>
    )
}