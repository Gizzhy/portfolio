import styles from "./skills.module.scss";
// icons
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { IoMdGitMerge } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPycharm } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
// icons
const Skills = () => {
  return (
    <>
      <div className={styles.skills1}>
        <div className={styles.skills2}>
          <div className={styles.skills3}>
            <FaHtml5 color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>HTML5</span>
          </div>
          <div className={styles.skills3}>
            <DiCss3 color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>CSS3</span>
          </div>
          <div className={styles.skills3}>
            <SiJavascript color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>Javascript</span>
          </div>
          <div className={styles.skills3}>
            <FaReact color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>React</span>
          </div>
        </div>

        <div className={styles.skills2}>
          <div className={styles.skills3}>
            <FaPython color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>Python</span>
          </div>
          <div className={styles.skills3}>
            <RiNextjsFill color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>Nextjs</span>
          </div>
          <div className={styles.skills3}>
            <TbApi color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>REST API</span>
          </div>
          <div className={styles.skills3}>
            <IoMdGitMerge color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>Git</span>
          </div>
        </div>
        <div className={styles.skills2}>
          <div className={styles.skills3}>
            <RiTailwindCssFill color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>Tailwind</span>
          </div>
          <div className={styles.skills3}>
            <SiPycharm color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>Pycharm</span>
          </div>
          <div className={styles.skills3}>
            <VscVscode color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>Vscode</span>
          </div>
          <div className={styles.skills3}>
            <FaBootstrap color="#ced6de" font-size="55px" />
            <span className={styles.skillsText}>Bootstrap</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
