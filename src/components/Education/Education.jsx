import React from "react";
import styles from "./Education.module.css";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

export default function Education() {
  const timeline = [
    { institution: "GGCT, Jabalpur", degree: "B.Tech in CSE", duration: "2021 – 2025", gpa: "GPA: 8.3/10", achievements: ["Top 3 in class", "SIH Top 15 (College)"] },
    { institution: "CBSE School, English Medium", degree: "Higher Secondary Education", duration: "2018 – 2020", gpa: "CGPA: 7.6/10", achievements: ["Top 3 in class", "Active in Science & Coding Clubs"] },
    { institution: "CBSE School, English Medium", degree: "Secondary Education", duration: "2013 – 2018", gpa: "CGPA: 8.3/10", achievements: ["Consistently Top Scorer", "Active in Science & Coding Clubs"] },
  ];

  return (
    <motion.section id="education" className={styles.education} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <motion.h2 className={styles.title} variants={item}>Education</motion.h2>

      <motion.div className={styles.timeline} variants={container}>
        {timeline.map((edu, index) => (
          <motion.div className={styles.card} key={index} variants={{ hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.2 } } }}>
            <div className={styles.icon}><BookOpen size={22} /></div>
            <div className={styles.content}>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className={styles.duration}>{edu.duration}</span>
              <span className={styles.gpa}>{edu.gpa}</span>
              <ul className={styles.achievements}>{edu.achievements.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
