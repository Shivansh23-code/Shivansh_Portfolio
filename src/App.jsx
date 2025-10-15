import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";

import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

import "./index.css";
import "./theme.css";

export default function App() {
  const { theme } = useTheme();

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" data-theme={theme} />
        <title>Shivansh Tiwari — Java Full Stack Developer</title>
        <meta
          name="description"
          content="Shivansh Tiwari — Java Full Stack Developer (React.js, Spring Boot, MySQL). Portfolio featuring Privoraa (frontend) and MBSE-API (backend)."
        />
      </Helmet>

      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key="page"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </HelmetProvider>
  );
}
