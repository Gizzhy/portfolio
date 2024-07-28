import "./styles/body.css";
import styles from "./styles/body.module.scss";
import travel from "../../assets/travel.png";
import simi from "../../assets/simi.png";
import codesystic from "../../assets/codesystic1.png";
import isokan from "../../assets/isokan1.png";
import Skills from "./components/Skills";
import Work from "./components/Work";

const Body = () => {
  return (
    <>
      <div className="akoko">
        <p className="exp">Skills & Tools</p>
        <Skills />
      </div>
      <div className="akoko3">
        <p className="exp">Projects</p>
      </div>
      <div className={styles.projectFirst}>
        <div className={styles.projectSecond}>
          <div className={styles.projectSecond2}>
            <img
              src={codesystic}
              className={styles.projectImage}
              alt="codesystic"
            />
          </div>
          <div className={styles.projectSecond3}>
            <p className={styles.projectWords}>Codesystic</p>
            <p className={styles.projectWords}>
              Information Technology Solutions provider. We provide
              cost-effective services on Mobile app Development, Ui/Ux Designs,
              Responsive Web Design, BackEnd Development, Graphics Designs,
              Crypto-Web3 insights & Investments.
            </p>
            <p className={styles.projectWords}>
              <span className={styles.projectSpan}>STACK: </span>React,
              Bootstrap, React Router, SCSS
            </p>
            <button className={styles.projectButton}>View Git Repo</button>
          </div>
        </div>
        <div className={styles.projectSecond}>
          <div className={styles.projectSecond2}>
            <p className={styles.projectWords}>Egbe Isokan Yoruba Germany</p>
            <p className={styles.projectWords}>
              We are non-governmental, non-profit, non-political, and
              non-religious organisation to foster Socio-cul-tural development
              of the Yoruba race in Diaspora. The association aims at producing
              an atmosphere for Yoruba’s and other interested people to share
              and discover Yoruba culture
            </p>
            <p className={styles.projectWords}>
              <span className={styles.projectSpan}>STACK: </span>React, React
              Router
            </p>
            <button className={styles.projectButton}>View Git Repo</button>
          </div>
          <div className={styles.projectSecond3}>
            <img
              src={isokan}
              className={styles.projectImage}
              alt="Isokan yoruba germany"
            />
          </div>
        </div>
      </div>
      {/* <div className="akoko3">
        <p className="exp">Projects</p>
      </div>
      <div className="proj-area">
        
          <div className="proj1-2">
            <img src={simi} alt="codesystic" className="proj-img" />
            <p className="proj-oro">Diffshadesofsimmie</p>
            <p className="proj-oro2">
              Discover our curated collection of trendy eyewear designed to
              elevate your look and protect your eyes. Find your perfect pair
              today and step into a world of clarity and fashion
            </p>
          </div>
        </div>
        <div className="proj2">
          <div className="proj1-1">
            <img src={yoruba} alt="codesystic" className="proj-img" />
            <p className="proj-oro">Egbe Isokan Yoruba Germany</p>
            <p className="proj-oro2">
              We are non-governmental, non-profit, non-political, and
              non-religious organisation to foster Socio-cul-tural development
              of the Yoruba race in Diaspora. The association aims at producing
              an atmosphere for Yoruba’s and other interested people to share
              and discover Yoruba culture
            </p>
          </div>
          <div className="proj1-2">
            <img src={travel} alt="codesystic" className="proj-img" />
            <p className="proj-oro">Travel Wings</p>
            <p className="proj-oro2">
              Embark on your next adventure with us at TravelWings. Explore
              endless destinations and find the best flight deals tailored to
              your journey. Let us be your wings to the world. Book your ticket
              today and start your unforgettable voyage.
            </p>
          </div>
        </div>
      </div> */}
      <Work />
    </>
  );
};

export default Body;
