import brain from '../../../../assets/utility/brain.svg';
import grey_ticket from '../../../../assets/utility/grey_ticket.svg';
import pencil from '../../../../assets/utility/pencil.svg';
import red_ticket from '../../../../assets/utility/red_ticket.svg';
import school_bag from '../../../../assets/utility/school_bag.svg';
import unlock from '../../../../assets/utility/unlock.svg';

import styles from './utility.module.scss';

const items = [
  {
    title: 'Access to Virtual Seminars',
    icon: grey_ticket,
    desc: `Wassie world will host virtual (for now) seminars for all holders. Various 
      professionals will be keynote speakers from the fields of tech, art and business.`,
  },
  {
    title: 'Wassie Development Workshops',
    icon: pencil,
    desc: `Wassies will be able to partake in free developmental and guided workshops gaining 
      knowledge and education in music production, songwriting, art (both physical and digital), 
      tech and fashion design etc. !`,
  },
  {
    title: 'Intellectual Property',
    icon: unlock,
    desc: `Ownership is at the heart of decentralization.  All Wassie holders will have full 
      ownership, licensing and IP rights for each and every wassie they own, with freedom to 
      create, sell and commission their own unique derivatives!`,
  },
  {
    title: 'Wassie World Events',
    icon: red_ticket,
    desc: `We do recognize the metaverse is ever expanding, as a Wassie holder you will have 
      access to Private Wassie Sandbox events and future planned in person events!`,
  },
  {
    title: 'Wassienomics',
    icon: school_bag,
    desc: `Wassie holders will be both randomly and purposefully selected to receive 
      grants/scholarships to attend and complete various bootcamps, courses and certificates 
      to further their education and careers!`,
  },
  {
    title: 'Wassie Wellness',
    icon: brain,
    desc: `Mental health is of utmost importance today more than ever before in history. Our 
      wassie community will have dedicated initiatives, collaborations and support resources 
      to improve and maintain the mental wellbeing of our community.`,
  },
];

const Utility = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}> Utility </h2>
        <div className={styles.utility}>
          {items.map(item => (
            <div className={styles.utilityPoint}>
              <h3 className={styles.subtitle}>
                <img className={styles.icon} src={item.icon} alt={`${item.title} icon`}/>
                {item.title}
              </h3>
              <p className={styles.description}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Utility;
