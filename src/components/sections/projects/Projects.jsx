import { useState } from "react";
import styles from "./projects.module.css";
import img1 from "../../../assets/darkmode.png";
import img3 from "../../../assets/Govalaimg.jpg";
import img2 from "../../../assets/vagabond.png";
import img4 from "../../../assets/skagenimg.png";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Dark Mode",
      image: img1,
      description:
        "This project centers on creating a visually appealing website with a strong emphasis on dark mode design. My goal was to show that dark-themed interfaces can be not only stylish but also accessible and easy to read for everyone. I carefully crafted the contrast, typography, and color palette to ensure visual clarity in low-light settings. To enhance the user experience, I integrated smooth animations and polished UI elements. The result is a modern, engaging site that demonstrates how dark mode can be both beautiful and functional.",
      tech: ["HTML", "CSS", "React", "JavaScript", "Figma"],
      link: "https://victorianicol.github.io/DarkMode/",
    },
    {
      title: "Blog Vagabond",
      image: img2,
      description:
        "Blog Vagabond is a thoughtfully designed blog project where I focused on combining text, imagery, and typography to reflect a specific thematic style. The goal was to create a visually cohesive and engaging blog experience. I implemented features such as a subscription option for readers, as well as the ability to receive financial support from visitors who value the content. Additionally, the site includes a contact form, allowing users to reach out for collaboration, feedback, or to request my assistance directly.",
      tech: ["HTML", "CSS", "React", "JavaScript", "Figma"],
      link: "https://victorianicol.github.io/BlogVagabond-main/#/",
    },
    {
      title: "Gowala Shopping",
      image: img3,
      description:
        "This project is a mobile-only shopping application where users can browse and select products with ease. I implemented a full cart functionality, allowing users to add items, adjust quantities, remove products, and place orders directly from the app. The interface is optimized for smaller screens, ensuring a smooth and intuitive user experience from product selection to checkout.Additionally, the site includes a subscription option for users.",
      tech: ["HTML", "CSS", "React", "JavaScript", "Figma", "MongoDB"],
      link: "https://victorianicol.github.io/mcd_web_gowala_server/",
    },

    {
      title: "Hotel",
      image: img4,
      description:
        "During my internship at Indexed.dk, I worked from a provided Figma file to replicate the design and some functionality of the Hotels Skagen website using WordPress, Elementor, JavaScript and custom CSS. The site is fully responsive, optimized for both desktop and mobile. This is a training project and not the actual Hotels Skagen website.",
      tech: ["Wordpress", "Elementor", "JavaScript", "CSS", "Figma"],
      link: "",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>PROJECTS</h2>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={project.image} alt={project.title} />

              <div className={styles.mobileOverlay}>
                <button onClick={() => toggleOverlay(index)}>More</button>
              </div>

              <div
                className={`${styles.projectOverlay} ${
                  activeIndex === index ? styles.showOverlay : ""
                }`}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techBadges}>
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} className={styles.projectLink}>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.footerNote}>More projects coming soon...</p>
      </div>
    </section>
  );
};
