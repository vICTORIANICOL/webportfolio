import styles from "./home.module.css";
import { useEffect, useRef, useState } from "react";

import img from "../../../assets/img.jpeg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaHome,
  FaEnvelope,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6"; 
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobephotoshop, SiMongodb } from "react-icons/si";

export const Home = () => {
  // Force scroll to top on both mount and refresh
  useEffect(() => {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use instant instead of smooth for immediate effect
    });
  }, []);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update visibility state based on intersection
          if (entry.target === leftRef.current) {
            setLeftVisible(entry.isIntersecting);
          }
          if (entry.target === rightRef.current) {
            setRightVisible(entry.isIntersecting);
          }
        });
      },
      { 
        threshold: 0.1, // Lower threshold to trigger earlier
        rootMargin: '50px', // Increased root margin to detect earlier
      }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section id="home" className={styles.section}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <a
          href="https://github.com/vICTORIANICOL"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={styles.sidebarIcon} />
        </a>
        <a
          href="https://www.instagram.com/victoriacakehousedk/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className={styles.sidebarIcon} />
        </a>
        <a
          href="https://www.facebook.com/nicol.victoria/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className={styles.sidebarIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/victoria-nicolenco-a443b6348/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={styles.sidebarIcon} />
        </a>
        <div className={styles.group} tabIndex={0}>
          <FaPhone className={styles.sidebarIcon} />
          <span className={styles.tooltip}>+45 40 50 55 86</span>
        </div>
        <div className={styles.group} tabIndex={0}>
          <FaHome className={styles.sidebarIcon} />
          <span className={styles.tooltip}>
            Rindsvej 2, 3TV, 8920, Randers NV
          </span>
        </div>
        <a href="mailto:victorianicolenco04@gmail.com">
          <FaEnvelope className={styles.sidebarIcon} />
          <span className={styles.tooltip}>victorianicolenco04@gmail.com</span>
        </a>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Text */}
          <div className={styles.textBlock}>
            <h1 className={styles.heading}>Hi, I'm Victoria Tech</h1>
            <p className={styles.paragraph}>
              With a sharp eye for aesthetics and a love for clean code, I
              specialize in crafting visually engaging and responsive websites.
              Whether it's building from scratch or working within CMS platforms
              like WordPress, I blend creativity with functionality to ensure
              each project looks great and performs even better. I'm driven by
              curiosity, always learning new technologies, and dedicated to
              delivering solutions that truly stand out on any device.
            </p>
            <div className={styles.buttons}>
              <a
                href="#projects"
                className={`${styles.button} ${styles.primary}`}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className={`${styles.button} ${styles.secondary}`}
              >
                Contact Me
              </a>
              <a
                href="/CVVictoria.pdf"
                target="_blank"
                rel="noreferrer"
                className={`${styles.button} ${styles.secondary}`}
              >
                CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img src={img} alt="Victoria" className={styles.image} />
          </div>
        </div>

        {/* Skills */}
        <div className={styles.skillsGrid}>
          <div
            ref={leftRef}
            className={`${styles.column} ${styles.leftColumn} ${
              leftVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.skillBox}>
              <FaHtml5 className={`${styles.icon} ${styles.html}`} />
              <span className={styles.tooltip2}>HTML5</span>
            </div>
            <div className={styles.skillBox}>
              <FaCss3 className={`${styles.icon} ${styles.css}`} />
              <span className={styles.tooltip2}>CSS3</span>
            </div>
            <div className={styles.skillBox}>
              <FaBootstrap className={`${styles.icon} ${styles.bootstrap}`} />
              <span className={styles.tooltip2}>Bootstrap</span>
            </div>
            <div className={styles.skillBox}>
              <SiMongodb className={`${styles.icon} ${styles.mongodb}`} />
              <span className={styles.tooltip2}>MongoDB</span>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.skillBox}>
              <DiJavascript className={`${styles.icon} ${styles.javascript}`} />
              <span className={styles.tooltip2}>JavaScript</span>
            </div>
            <div className={styles.skillBox}>
              <FaReact className={`${styles.icon} ${styles.react}`} />
              <span className={styles.tooltip2}>React</span>
            </div>
            <div className={styles.skillBox}>
              <FaNodeJs className={`${styles.icon} ${styles.nodejs}`} />
              <span className={styles.tooltip2}>Node.js</span>
            </div>
            <div className={styles.skillBox}>
              <FaGithub className={`${styles.icon} ${styles.github}`} />
              <span className={styles.tooltip2}>GitHub</span>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`${styles.column} ${styles.rightColumn} ${
              rightVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.skillBox}>
              <RiTailwindCssFill
                className={`${styles.icon} ${styles.tailwind}`}
              />
              <span className={styles.tooltip2}>Tailwind CSS</span>
            </div>
            <div className={styles.skillBox}>
              <IoLogoFigma className={`${styles.icon} ${styles.figma}`} />
              <span className={styles.tooltip2}>Figma</span>
            </div>
            <div className={styles.skillBox}>
              <SiAdobephotoshop
                className={`${styles.icon} ${styles.photoshop}`}
              />
              <span className={styles.tooltip2}>Photoshop</span>
            </div>
            <div className={styles.skillBox}>
              <FaWordpress className={`${styles.icon} ${styles.wordpress}`} />
              <span className={styles.tooltip2}>WordPress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
