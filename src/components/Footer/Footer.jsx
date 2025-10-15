import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import BackToTop from "../BackToTop/BackToTop";
import { Github, Linkedin, Mail } from "lucide-react";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Footer() {
  return (
    <motion.footer className={styles.footer} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <motion.div className={styles.top} variants={item}>
        <BackToTop />
      </motion.div>

      <motion.div className={styles.socials} variants={item}>
        <a href="https://github.com/Shivansh23-code" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/shivansh-tiwari-53485327bs" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
        <a href="mailto:shivanshtiwari887@gmail.com"><Mail size={20} /></a>
      </motion.div>

      <motion.div className={styles.copy} variants={item}>
        © {new Date().getFullYear()} Shivansh Tiwari. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
