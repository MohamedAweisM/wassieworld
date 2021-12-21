import React, { useEffect, useState } from "react";

import countdown from "../../assets/icons/timerboxcrop.png";
import mint from "../../assets/texts/countdowntomint.png";
import wassie from "../../assets/icons/wassietext.png";
import wassieone from "../../assets/wassies/aboutLL.png";
import wassietwo from "../../assets/wassies/roadmapLL.png";
import wassiethree from "../../assets/wassies/teamwassieLL.png";
import wassiefour from "../../assets/wassies/utilityLL.png";
import bigwassie from "../../assets/wassies/wassie2.png";

import styles from "./landing.module.scss";

const Landing = () => {
  const formatNumber = (number) =>
    number.toLocaleString("en-US", { minimumIntegerDigits: 2 });

  const getTimeLeft = () => {
    const releaseDate = new Date("Jan 7 2022 15:00");
    const difference = releaseDate - new Date();

    if (difference > 0) {
      return {
        days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
        seconds: formatNumber(Math.floor((difference / 1000) % 60)),
      };
    }

    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearTimeout();
  });

  const { days, hours, minutes, seconds } = timeLeft;
  const countdownString = `${days} Days ${hours}:${minutes}:${seconds}`;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <img className="landing-top__logo" src={wassie} /> */}
        <div className={styles.countdownWrapper}>
          <img className={styles.timerTitle} src={mint} />
          <div className={styles.timerWrapper}>
            <span className={styles.timer}>{countdownString}</span>
            <img className={styles.timerBg} src={countdown}></img>
          </div>
        </div>
        <img className={styles.wassie} src={bigwassie} />
      </div>
    </div>

    // <div className="landing-bottom">
    //   <img className="landing-bottom__about" src={wassieone} />

    //   <img className="landing-bottom__roadmap" src={wassietwo} />

    //   <img className="landing-bottom__utility" src={wassiethree} />

    //   <img className="landing-bottom__team" src={wassiefour} />

    // </div>
  );
};

export default Landing;
