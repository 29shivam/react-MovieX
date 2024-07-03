import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                   Made With Love ♥ || Shivam Singh 
                </div>
                <div className="socialIcons">
                    <a href="https://www.instagram.com/shivam.29_/">
                    <span className="icon">
                        <FaInstagram />
                    </span></a>

                    <a href="https://github.com/29shivam">
                    <span className="icon">
                        <FaGithub />
                    </span></a>


                    <a href="https://www.linkedin.com/in/29shivam/">
                    <span className="icon">
                        <FaLinkedin />
                    </span></a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;