import styles from "./work.module.scss";
// icons
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
// icons
import Form from "./components/Form";

export default function Work() {
  return (
    <>
      <div className={styles.work0}>
        <p className={styles.work}>Let's Work together !</p>
        <div className={styles.workSplit}>
          <div className={styles.workSplit1}>
            <p className={styles.work2}>
              Liked my work? I’m currently open for remote work as Frontend
              React Developer.
            </p>
            <button className="bn54">
              <span className="bn54span">View Resume</span>
            </button>
            <div className={styles.contactArea0}>
              <a href="https://wa.me/2347010190783">
                <div className={styles.contactArea}>
                  <FaSquareWhatsapp color="#ced6de" fontSize="55px" className={styles.workIcon}/>
                  <span className={styles.contactThings}>+2347010190783</span>
                </div>
              </a>
              <a href="https://github.com/Gizzhy">
                <div className={styles.contactArea}>
                  <FaGithub color="#ced6de" fontSize="55px" className={styles.workIcon}/>
                  <span className={styles.contactThings}>
                    github.com/Gizzhy
                  </span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/gideon-akinlotan-926036220/">
                <div className={styles.contactArea}>
                  <FaLinkedin color="#ced6de" fontSize="55px" className={styles.workIcon}/>
                  <span className={styles.contactThings}>
                    linkedin.com/in/gideon-akinlotan
                  </span>
                </div>
              </a>
              <a href="mailto:gideonakinlotan16@gmail.com">
                <div className={styles.contactArea}>
                  <MdEmail color="#ced6de" fontSize="55px" className={styles.workIcon}/>
                  <span className={styles.contactThings}>
                    gideonakinlotan16@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.workSplit2}>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
