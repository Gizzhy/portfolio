import "./styles/hero.css";
import git from "../../assets/github.svg";
import x from "../../assets/x.svg";
import insta from "../../assets/insta.svg";
import maill from "../../assets/maill.svg";
import link from "../../assets/linkedin.svg";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main-start">
          <p className="main-oro">Gideon Akinlotan</p>
          <p className="main-oro2">
            I’m a FrontEnd Developer, Data Scientist & Digital Enthusiast.
          </p>
          <div className="main-buttons">
            <button className="buttons-m">Get in touch</button>
            <button className="bn54">
              <span className="bn54span">View Resume</span>
            </button>
          </div>
          <div className="soocials">
            <a href="https://github.com/Gizzhy">
              <img src={git} className="sols" />
            </a>
            <a href="https://x.com/gizzhy_a">
              <img src={x} className="sols" />
            </a>
            <a href="https://www.instagram.com/gideon_akinz">
              <img src={insta} className="sols" />
            </a>
            <a href="mailto:gideonakinlotan16@gmail.com">
              <img src={maill} className="sols" />
            </a>
            <a href="https://www.linkedin.com/in/gideon-akinlotan-926036220/">
              <img src={link} className="sols" />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="main2">
        <div className="blue-p1" data-aos="slide-up">
          <p className="about">ABOUT</p>
          <p className="about-w">
            I'm a passionate Frontend Web Developer with versatile expertise in
            crafting seamless user experiences and unlocking valuable insights
            from data. Proficient in ReactJS and Python, I focus on intuitive
            design and advanced analytics.
          </p>
        </div>
        <div className="blue-p2" data-aos="slide-up"></div>
      </div> */}
    </>
  );
};

export default Hero;
