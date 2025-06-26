
import styles from "./about.module.css";

export const About = () => {
  const developmentSkills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Html",
    "CSS",
    "SASS",
    "Node.js",
    "Bootstrap",
    "GitHub",
    "WordPress",
    "VisualStudioCode",
    "SEO Fundamentals",
  ];

  const conceptualSkills = [
    "Figma",
    "Photoshop",
    "Canva",
    "UI/UX Design Principles",
    "Problem Solving Skills",
    "Typography & Layout Fundamentals",
    "Design Thinking",
    "User Journey Mapping",
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>

        <div className={styles.card}>
          <p className={styles.description}>
            I'm a detail-oriented frontend developer focused on creating
            intuitive, scalable, and accessible web applications. I build clean,
            responsive user interfaces using tools like Figma, React, CSS, and
            Tailwind. My work bridges the gap between design and development,
            ensuring every site not only looks polished but also works
            seamlessly across platforms. I'm experienced with both custom
            development and CMS solutions like WordPress, making it easy for
            clients to manage and update content. Whether collaborating with
            teams or working independently, I’m committed to delivering clear,
            user-centered solutions from concept to deployment.
          </p>

          <div className={styles.skillsGrid}>
            <div className={styles.skillBlock}>
              <h3 className={styles.skillTitle}>Development Skills</h3>
              <div className={styles.badgeContainer}>
                {developmentSkills.map((skill, index) => (
                  <span key={index} className={styles.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skillBlock}>
              <h3 className={styles.skillTitle}>Conceptual Skills</h3>
              <div className={styles.badgeContainer}>
                {conceptualSkills.map((skill, index) => (
                  <span key={index} className={styles.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
