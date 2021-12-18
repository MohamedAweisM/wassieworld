import React from "react";
import teamwas from "../../assets/texts/teamwassie.png"
import coach from "../../assets/wassies/coachwassie.png"
import doc from "../../assets/wassies/docwassie.png"
import hd from "../../assets/wassies/hdwassie.png"
import team from "../../assets/wassies/wassie3.png"


import styles from "./team.scss"

const Team = () => {
    return (
        <>
            <div className="team">
                <img src={teamwas} className="team__title" alt="team wassie" />
                <img src={doc} className="team__pics" />
                <img src={hd} className="team__pics"/>
                <img src={coach} className="team__pics"/>
                <img src={team} classname="team__wassie" /> 
            </div> 
        </>
    )
} 