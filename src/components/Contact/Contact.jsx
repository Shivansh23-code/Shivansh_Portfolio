import React, { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Form Data:", formData); setFormData({ name: "", email: "", message: "" }); alert("Message sent successfully!"); };

  return (
    <motion.section id="contact" className={styles.contact} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <motion.h2 className={styles.title} variants={item}>Contact Me</motion.h2>

      <motion.div className={styles.container} variants={container}>
        <motion.div className={styles.info} variants={item}>
          <div className={styles.item}><Mail size={20} /><span>shivanshtiwari887@gmail.com</span></div>
          <div className={styles.item}><Phone size={20} /><span>+91 62646 46145</span></div>
          <div className={styles.item}><MapPin size={20} /><span>Jabalpur(M.P.), India</span></div>
        </motion.div>

        <motion.form className={styles.form} onSubmit={handleSubmit} variants={item}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" required />
          <button type="submit">Send Message</button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
