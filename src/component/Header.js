import React from 'react';
import "../component/Header.css";
import MyNav from "./MyNav";

function Header() {
    return (
        <div className="BG">
            <div className="container">
                <MyNav/>

                <p className="Title">
                    We are an American based company professionally provide
                    <span className="mini_Title"> auto auction participating</span>
                </p>
                <p className="Text">We ship cars, motorcycles, boats, special machinery in containers from the USA to
                    all over the world.</p>

                <button className="contact">
                    <a href="#" className="link_contact">CONTACT US</a>
                </button>
            </div>
        </div>
    );
}

export default Header;