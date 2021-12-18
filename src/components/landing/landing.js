import React from "react";

import countdown from "../../assets/icons/timerbox.png";
import mint from "../../assets/texts/countdowntomint.png"
import wassie from "../../assets/icons/wassietext.png";
import wassieone from "../../assets/wassies/aboutLL.png";
import wassietwo from "../../assets/wassies/roadmapLL.png";
import wassiethree from "../../assets/wassies/teamwassieLL.png";
import wassiefour from "../../assets/wassies/utilityLL.png";

import styles from "./landing.scss"

const Landing = () => {
    return (
      <>
      <div className="landing-top">
        <img className="landing-top__logo" src={wassie} />
        <img classname="landing-top__title" src={mint} />
        <img className="landing-top__timer" src={countdown} />
      </div>
      <div className="landing-bottom">
        <img className="landing-bottom__about" src={wassieone} />

        <img className="landing-bottom__roadmap" src={wassietwo} />
        
        <img className="landing-bottom__utility" src={wassiethree} />

        <img className="landing-bottom__team" src={wassiefour} />

        
      </div>
      </>
      

    )
}

export default Landing