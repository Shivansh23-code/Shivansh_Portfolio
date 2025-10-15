import React from "react";
import styles from "./Experience.module.css";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      company: "The Developer's Arena",
      role: "Java Full Stack Developer Intern",
      duration: "Oct 2025 – Present",
      description: `Working on a full-stack web application using Java, Spring Boot, JPA, Hibernate, MySQL/MongoDB, and React.js.`,
      stack: ["Java", "Spring Boot", "React.js", "MySQL/MongoDB", "REST APIs", "JPA", "Hibernate"],
    },
    {
      company: "Zidio Development",
      role: "Java Full Stack Developer Intern",
      duration: "July 2025 – Oct 2025",
      description: `Worked on a full-stack Job Portal web application using Java, Spring Boot, JPA, Hibernate, MySQL, and React.js.`,
      stack: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "JPA", "Hibernate"],
    },
    {
      company: "Techplement",
      role: "Frontend Developer Intern",
      duration: "May 2025 – June 2025",
      description: `Developed a course-selling platform and multitasking calculator (Scientific & BMI) using HTML, CSS, and JavaScript.`,
      stack: ["HTML", "CSS", "JavaScript", "UI Design", "React.js"],
    },
  ];

  return (
    <section id="experience" className={styles.experience}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className={styles.timeline}>
        {timeline.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`${styles.card} ${isLeft ? styles.left : styles.right}`}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.icon}>
                <Briefcase size={22} />
              </div>

              <div className={styles.content}>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className={styles.duration}>{exp.duration}</span>
                <p>{exp.description}</p>
                <div className={styles.stack}>
                  {exp.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
