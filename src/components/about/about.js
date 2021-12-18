import React from "react";
import about from "../../assets/texts/about.png"
import bluelily from "../../assets/icons/bluelily.png"
import aboutwassie from "../../assets/wassies/wassie1.png"

import styles from "./about.scss"

const About = () => {
    return (
        <>
            <div className="about-top">
                <img alt="About" src={about} className="about-top__title"/>
                <img alt="About section" src={bluelily} className="about-top__blue"/>
                <img alt="wassie" src={aboutwassie} className="about-top__wassie" />
            </div>
        </>
    )
}