import React from 'react';
import "../component/MyNav.css";
import Logo from "../img/Logo.png"
import icon1 from "../img/Group 8.png"
import icon2 from "../img/Group 9.png"
import icon3 from "../img/Group 244.png"
import icon4 from "../img/Group 245.png"


function MyNav() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="link" href="#">Contacts</a>
                        </li>
                    </ul>
                </div>

                <div className="icons">
                    <img src={icon1} alt="telegram"/>
                    <img src={icon2} alt="whatsup"/>
                    <img src={icon3} alt="youtube"/>
                    <img src={icon4} alt="tiktok"/>
                </div>

                <div className="lang_btns">
                    <div className="button">
                        <a href="#">EN</a>
                    </div>
                    <p className="stick">/</p>
                    <div className="button Disabled">
                        <a href="#">RU</a>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default MyNav;