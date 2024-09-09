import React from 'react';
import "../section/Section2.css";
import work_line from "../img/Group 250.png";
import contact_car from "../img/car_img.png";

function Section2() {
    return (
        <>

            <div className="container">
                <p className="Title">How it works</p>

                <div className="img_work_line">
                    <img src={work_line} alt="" className="work_line"/>
                </div>

                <div className="row mini_boxs">
                    <div className="col-xl-3 mini_box">
                        <p className="mini_box_title">Bid and buy a lot</p>
                        <p className="mini_box_text">There's a wide variety of auctions where bargains can be had at
                            wholesale prices for buyers who know what they’re doing.</p>
                    </div>
                    <div className="col-xl-3 mini_box">
                        <p className="mini_box_title">Deliver your units from the auction to our
                            yard</p>
                        <p className="mini_box_text">After bidding, the vehicle will be sent to our yard
                            for storage until departure.</p>
                    </div>
                    <div className="col-xl-3 mini_box">
                        <p className="mini_box_title">Load your vehicles into the container</p>
                        <p className="mini_box_text">At our loading facility your vehicle is driven into the container
                            and
                            carefully positioned before all wheels are safely checked.</p>
                    </div>
                    <div className="col-xl-3 mini_box">
                        <p className="mini_box_title">Buy all the spare parts if necessary</p>
                        <p className="mini_box_text">We offer original spare parts and components for the different
                            types of
                            vehicles.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid Border_radius">
                <div className="container MB">
                    <div className="contact_us">
                        <div className="row contact_form_img">
                            <div className="col-xl-5 contact_form">
                                <p className="contact_title">Contact us</p>
                                <p className="contact_text">Contact us if you need more information
                                    about our services</p>
                                <input type="text" className="name Block" placeholder="Name"/>
                                <input type="tel" className="phone_number Block" placeholder="Phone Number"/>
                                <textarea name="message" id="" cols="30" rows="3" placeholder="Message"
                                          className="text_message Block"/>

                                <div className="checkbox_link">
                                    <input type="checkbox" className="checkbox form-check-input"/>
                                    <p className="text_link">I agree with the
                                        <span className="link_text">
                                            <a href="#">Privacy policy</a>
                                        </span>
                                    </p>
                                </div>
                                <button className="send_message">
                                    <a href="#" className="send_message_link">SEND A MESSAGE</a>
                                </button>
                            </div>
                            <div className="col-xl-7 contact_img">
                                <img src={contact_car} alt="" className="car_img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Section2;