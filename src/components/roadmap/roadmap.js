import React from "react";
import roadmapone from "../../assets/roadmap/genesis.png"
import roadmaptwo from "../../assets/roadmap/wassiewarriors.png"
import roadmapthree from "../../assets/roadmap/wassiewearables.png"
import roadmapfour from "../../assets/roadmap/wassiepond.png"
import wassie from "../../assets/wassies/wassie2.png"
import roadmap from "../../assets/texts/roadmap.png"
import life from "../../assets/texts/life1.png"

import styles from "./roadmap.scss"

const Roadmap = () => {
    return (
        <>
        <div className="roadmap">
            <div className="roadmap-top">
                <img className="roadmap-top__title" src={roadmap} alt="Roadmap" />
                <img className="roadmap-top__subtitle" src={life} alt="Life 1" />      
            </div>
            <div className="roadmap-middle">
                <img className="roadmap-middle__one" src={roadmapone} />
                <img className="roadmap-middle__two" src={roadmaptwo} />
                <img className="roadmap-middle__three" src={roadmapthree} />
                <img className="roadmap-middle__four" src={roadmapfour} />
            </div>
            <div className="roadmap-bottom">
                <img className="roadmap-bottom" src={wassie} />
            </div>
        </div>
        </>
    )
}