import React, { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return visible ? (
    <div className={styles.backToTop} onClick={scrollToTop}>
      <ArrowUp size={24} />
    </div>
  ) : null;
}
