import "./styles/body.css";
import styles from "./styles/body.module.scss";
import strart from "../../assets/strart.png";
import simi from "../../assets/simiii.png";
import codesystic from "../../assets/codesystic1.png";
import isokan from "../../assets/isokan1.png";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { IoArrowRedoSharp } from "react-icons/io5";

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
            <p className={styles.projectWordss}>Codesystic</p>
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
            <a href="https://github.com/Gizzhy/techmaven">
              <button className={styles.projectButton}>View Git Repo</button>
            </a>
          </div>
        </div>
        <div className={styles.projectSecondd}>
          <div className={styles.projectSecond2}>
            <p className={styles.projectWordss}>Egbe Isokan Yoruba Germany</p>
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
            <a href="https://github.com/Gizzhy/Egbe-yoruba">
              <button className={styles.projectButton}>View Git Repo</button>
            </a>
          </div>
          <div className={styles.projectSecond3}>
            <img
              src={isokan}
              className={styles.projectImage}
              alt="Isokan yoruba germany"
            />
          </div>
        </div>
        <div className={styles.projectSecond}>
          <div className={styles.projectSecond2}>
            <img
              src={strart}
              className={styles.projectImage}
              alt="codesystic"
            />
          </div>
          <div className={styles.projectSecond3}>
            <p className={styles.projectWordss}>Strart</p>
            <p className={styles.projectWords}>
              Information Technology Solutions provider. We provide
              cost-effective services on Mobile app Development, Ui/Ux Designs,
              Responsive Web Design, BackEnd Development, Graphics Designs,
              Crypto-Web3 insights & Investments.
            </p>
            <p className={styles.projectWords}>
              <span className={styles.projectSpan}>STACK: </span>React, NEXTjs,
              Tailwind
            </p>
            <a href="https://github.com/Gizzhy/strart">
              <button className={styles.projectButton}>View Git Repo</button>
            </a>
          </div>
        </div>
        <div className={styles.projectSecondd}>
          <div className={styles.projectSecond2}>
            <p className={styles.projectWordss}>Shades of Simi</p>
            <p className={styles.projectWords}>
              Discover our curated collection of trendy eyewear designed to
              elevate your look and protect your eyes. Find your perfect pair
              today and step into a world of clarity and fashion
            </p>
            <p className={styles.projectWords}>
              <span className={styles.projectSpan}>STACK: </span>React
            </p>
            <a href="https://github.com/Gizzhy/similadeshades">
              <button className={styles.projectButton}>View Git Repo</button>
            </a>
          </div>
          <div className={styles.projectSecond3}>
            <img
              src={simi}
              className={styles.projectImage}
              alt="shades of simi"
            />
          </div>
        </div>
        <div className={styles.projectButtonArea}>
          <button className={styles.projectButton2}>
            View all <IoArrowRedoSharp />
          </button>
        </div>
      </div>
      {/* <div className="akoko3">
      
            <p className="proj-oro2">
              Embark on your next adventure with us at TravelWings. Explore
              endless destinations and find the best flight deals tailored to
              your journey. Let us be your wings to the world. Book your ticket
              today and start your unforgettable voyage.
            </p>
         
      </div> */}
      <Work />
    </>
  );
};

export default Body;
