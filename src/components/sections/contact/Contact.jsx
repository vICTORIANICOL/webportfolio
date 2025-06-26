import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Let's Work Together</h2>
        <p className={styles.subtext}>
          I'm actively seeking new opportunities to contribute my skills to a
          forward-thinking team. If your company is looking for a passionate and
          dedicated developer, I'd love to hear from you!
        </p>

        <div className={styles.contactMethods}>
          <a href="tel:+4540505586" className={styles.method}>
            <div className={styles.iconCircle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <p className={styles.methodText}>+45 40 50 55 86</p>
          </a>

          <a
            href="mailto:victorianicolenco04@gmail.com"
            className={styles.method}
          >
            <div className={styles.iconCircle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className={styles.methodText}>victorianicolenco04@gmail.com</p>
          </a>
        </div>

        <form
          action="https://formspree.io/f/xnnvvwnq"
          method="POST"
          className={styles.form}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
