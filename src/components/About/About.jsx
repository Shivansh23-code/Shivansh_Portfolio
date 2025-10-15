import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.wrapper} 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className={styles.title} variants={item}>
          About Me
        </motion.h2>

        <motion.div className={styles.content}>
          <motion.p variants={item}>
            I’m <span>Shivansh Tiwari</span>, a passionate <b> Software Developer </b> 
            with expertise in <b>React.js, Spring Boot, and scalable REST APIs</b>.
          </motion.p>

          <motion.p variants={item}>
            Currently, I’m interning at <b>The Developer's Arena</b>, working as 
            full-stack developer.
          </motion.p>

          <motion.p variants={item}>
            Recently, I have interned at <b>Zidio Development</b>, worked on a 
            full-stack <b>Job Board Application</b>.
          </motion.p>

          <motion.p variants={item}>
            Beyond coding, I love exploring automation, AI-driven systems, and 
            creative UI/UX patterns.
          </motion.p>
        </motion.div>

        <motion.div className={styles.highlights}>
          <motion.div className={styles.card} variants={item}>
            <h3>💼 Experience</h3>
            <p>3 Internships (The Developer's Arena, Zidio Development, Techplement)</p>
          </motion.div>

          <motion.div className={styles.card} variants={item}>
            <h3>🏆 Achievements</h3>
            <p>SIH Top 15 (College) | Wipro TalentNext | AWS AI-ML | Software Engineer Certified - Hackerrank</p>
          </motion.div>

          <motion.div className={styles.card} variants={item}>
            <h3>🎓 Education</h3>
            <p>B.Tech CSE – GGCT, Jabalpur (8.3 GPA)</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
