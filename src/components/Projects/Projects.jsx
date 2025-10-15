import React, { useState } from "react";
import styles from './Projects.module.css';
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
  const [open, setOpen] = useState(null);

  const featured = [
    {
      title: "Privoraa — Your Private AI Companion",
      period: "June 2025 - July 2025",
      type: "Frontend (React.js, Vanilla CSS)",
      desc: `Built the Responsive Frontend UI for Privoraa Focusing on Accessible, Device-Agnostic Interfaces and Polished Micro-Interactions.`,
      tech: ["React.js", "Vite", "Vanilla CSS", "Framer Motion", "Responsive UI"],
      live: "https://privoraa.vercel.app/",
      repo: null,
      screenshot: "/placeholder.jpg",
    },
    {
      title: "MBSE-API — Model-Based Systems Engineering API",
      period: "July 2025 - Ongoing",
      type: "Backend (Java, Spring Boot)",
      desc: `Engineered a RESTful Spring Boot Service to Manage System Models & Function Blocks. Integrated JPA + MySQL, Documented Endpoints with Swagger.`,
      tech: ["Java", "Spring Boot", "JPA", "MySQL", "Swagger", "Postman"],
      live: null,
      repo: "https://github.com/Shivansh23-code/MBSE-API",
      screenshot: "/placeholder.jpg",
    },
  ];

  return (
    <motion.section
      id="projects"
      className={styles.projects}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 className={styles.title} variants={item}>
        Selected Projects
      </motion.h2>
      <motion.p className={styles.lead} variants={item}>
        A Curated Selection Highlighting Frontend Craft <b>(UI/UX)</b> and Backend Engineering <b>(APIs & Data Models)</b>.
      </motion.p>

      <motion.div className={styles.grid} variants={container}>
        {featured.map((p, idx) => (
          <motion.article
            key={p.title}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(109,93,252,0.12)" }}
            whileTap={{ scale: 0.97 }}
          >

            <div className={styles.media}>
              <img
                src={p.screenshot}
                alt={`${p.title} screenshot`}
                className={styles.screenshot}
                onError={(e) => { e.target.onerror = null; e.target.src = "/assets/placeholder.png"; }}
              />
            </div>

            <div className={styles.body}>
              <div className={styles.header}>
                <h3>{p.title}</h3>
                <span className={styles.period}>{p.period}</span>
              </div>

              <p className={styles.type}>{p.type}</p>
              <p className={styles.desc}>
                {open === idx ? p.desc : p.desc.slice(0, 140) + (p.desc.length > 140 ? "…" : "")}
              </p>

              <div className={styles.tech}>
                {p.tech.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>

              <div className={styles.actions}>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                    <ExternalLink size={16} /> Live
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
                    <Github size={16} /> Code
                  </a>
                )}
                <button
                  className={styles.toggle}
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                >
                  {open === idx ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
