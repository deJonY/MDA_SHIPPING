import React from 'react';
import "../component/Footer.css";
import whats_up from "../img/whatsapp (3) 3.png";
import telegram from "../img/telegram (2) 3.png";
import youtube from "../img/youtube 1.png";
import tik_tok from "../img/tik-tok 1.png"
import footer_logo from "../img/Group 201.png";

function Footer() {
    return (
        <div className="container-fluid background-color">
            <div className="Background-color">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 footer_padding">
                            <img src={footer_logo} alt="Footer logo" className="footer_logo"/>
                        </div>
                        <div className="col-xl-3 footer_padding">
                            <a href="#" className="Links">Home</a>
                            <a href="#" className="Links">Services</a>
                            <a href="#" className="Links">Contacts</a>
                        </div>
                        <div className="col-xl-3 footer_padding">
                            <div className="social_links">
                                <a href="https://www.whatsapp.com" className="">
                                    <img src={whats_up} alt="#" className="whats_up"/>
                                </a>
                                <a href="https://telegram.org" className="">
                                    <img src={telegram} alt="#" className="telegram"/>
                                </a>
                                <a href="https://www.youtube.com" className="">
                                    <img src={youtube} alt="#" className="youtube"/>
                                </a>
                                <a href="https://www.tiktok.com" className="">
                                    <img src={tik_tok} alt="#" className="tik_tok"/>
                                </a>
                            </div>
                            <a href="mailto:info@mdashipping.us" className="email">info@mdashipping.us</a>
                            <a href="tel:+1 470 569 2965" className="tell">+1 470 569 2965</a>
                            <p className="address">3675 Crestwood Parkway, Suite 400, Duluth, GA, 30096, USA</p>
                        </div>
                    </div>
                    <p className="footer_mini_text">Copyright © 2022 Cargo. All Rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;