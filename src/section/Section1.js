import React from 'react';
import "../section/Section1.css";
import Vid from "../img/Group 239.png";

function Section1() {
    return (
        <div className="container">
            <div className="video">
                <a href="https://youtu.be/LZCymhdOZNU">
                    <img className="vid" src={Vid} alt="Video"/>
                </a>
            </div>

            <p className="text">Services we do</p>

            <div className="cards">
                <div className="first_cards">
                    <div className="row card_flex">
                        <div className="col-xl-3 img1 hover_card">
                            <p className="context1">Buying assistance</p>
                        </div>
                        <div className="col-xl-3 img2 hover_card">
                            <p className="context2">Auto transport</p>
                        </div>
                        <div className="col-xl-6 img3 hover_card">
                            <p className="context3">Warehousing</p>
                        </div>
                    </div>
                </div>
                <div className="second_cards">
                    <div className="row card_flex">
                        <div className="col-xl-6 img4 hover_card">
                            <p className="context4">Automobile loading</p>
                        </div>
                        <div className="col-xl-3 img5 hover_card">
                            <p className="context5">Motorcycle loading</p>
                        </div>
                        <div className="col-xl-3 img6 hover_card">
                            <p className="context6">Boat loading</p>
                        </div>
                    </div>
                </div>
                <div className="third_cards">
                    <div className="row card_flex">
                        <div className="col-xl-3 img7 hover_card">
                            <p className="context1">Heavy machinery loading</p>
                        </div>
                        <div className="col-xl-3 img8 hover_card">
                            <p className="context2">Dismantling</p>
                        </div>
                        <div className="col-xl-6 img9 hover_card">
                            <p className="context3">Parts purchase assistance</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="services">
                <a href="#" className="link_services">MORE ABOUT SERVICES</a>
            </button>
        </div>
    );
}

export default Section1;