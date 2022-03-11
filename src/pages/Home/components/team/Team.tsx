import docherty from '../../../../assets/team/docherty.jpeg';
import dochertyWassie from '../../../../assets/team/dochertyWassie.jpeg';
import coach from '../../../../assets/team/coach.jpeg';
import coachWassie from '../../../../assets/team/coachWassie.jpeg';
import mahlio from '../../../../assets/team/mahlio.jpeg';
import mahlioWassie from '../../../../assets/team/mahlioWassie.jpeg';
import twitterLogo from '../../../../assets/icons/twitterlogoblack.png';

import styles from './team.module.scss';

const team = [
  {
    name: 'Docherty',
    role: 'Artist & Creator',
    twitter: 'https://twitter.com/ByDillen',
    img: docherty,
    wassieImg: dochertyWassie,
  },
  {
    name: 'Coach',
    role: 'Developer',
    twitter: 'https://twitter.com/MohAweis',
    img: coach,
    wassieImg: coachWassie,
  },
  {
    name: 'Mahlio',
    role: 'Developer',
    twitter: 'https://twitter.com/romahlio',
    img: mahlio,
    wassieImg: mahlioWassie,
  },
];

const Team = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h2 className={styles.title}> Team </h2>
      <div className={styles.team}>
        {team.map(item => (
          <div className={styles.teamMember}>
            <img
              className={styles.wassieImage}
              src={item.wassieImg}
              alt={`${item.name} wassie`}
              />
            <img className={styles.realImage} src={item.img} alt={`${item.name}`} />
            <a
              href={item.twitter}
              target='_blank'
              rel='noreferrer'
              className={styles.twitterLink}>
              <h3 className={styles.name}>
                {item.name}
                <img
                  className={styles.twitterIcon}
                  src={twitterLogo}
                  alt={`${item.name} twitter`}/>
              </h3>
              </a>
            <h4 className={styles.role}> {item.role} </h4>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Team;
