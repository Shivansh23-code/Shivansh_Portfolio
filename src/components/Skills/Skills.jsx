import React from "react";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { Code, Database, Server, Wrench } from "lucide-react";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", icon: <Code size={22} />, skills: ["React.js", "Vite.js", "JavaScript", "HTML5", "CSS3", "Vanilla CSS"] },
    { title: "Backend", icon: <Server size={22} />, skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "JPA", "Hibernate"] },
    { title: "Database", icon: <Database size={22} />, skills: ["MySQL", "MongoDB"] },
    { title: "Tools & Workflow", icon: <Wrench size={22} />, skills: ["Git & GitHub", "Maven", "Postman", "Railway", "Vercel", "Agile", "CI/CD"] },
  ];

  return (
    <motion.section
      id="skills"
      className={styles.skills}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 className={styles.title} variants={item}>Skills & Technologies</motion.h2>

      <motion.div className={styles.grid} variants={container}>
        {skillCategories.map((category, index) => (
          <motion.div key={index} className={styles.card} variants={item}>
            <div className={styles.icon}>{category.icon}</div>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
