import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m <span className={styles.accent}>Shivansh Tiwari</span>
        
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={styles.subtext}
      >
        <b>Software Developer</b> Specializing in <b>React.js</b>, <b>Spring Boot</b> & <b>Scalable REST APIs</b>.
      </motion.p>

      <motion.a
        href="#projects"
        className={styles.cta}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
