import React from "react";

import discordLogo from '../../assets/icons/discordlogoblack.png'
import solanaLogo from '../../assets/icons/solanalogoblack.png'
import twitterLogo from '../../assets/icons/twitterlogoblack.png'
import wassieworld from "../../assets/texts/wassieworld.png"

import styles from "./header.scss";

const Header = () => {
    return (
        <div className="container">
           <div className="header">
               <div className="header__left">
                   <img className="header__left--title" src={wassieworld} />
               </div>
               <div className="header__right">
                   <a href="https://discord.gg/VWKcFRKdjK">
                       <img className="header__right--discord" src={discordLogo} />
                    </a>
                   <img className="header__right--solana" src={solanaLogo} />
                    <a href="https://twitter.com/Wassieworld">
                        <img className="header__right--twit" src={twitterLogo}/>
                    </a>
               </div>
           </div> 
        </div>
        
    )
}

export default Header