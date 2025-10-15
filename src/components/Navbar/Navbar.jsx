import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import useTheme from "../../hooks/useTheme";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Shivansh Tiwari</div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {sections.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={active === item ? styles.active : ""}
              onClick={(e) => handleClick(e, item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button onClick={toggleTheme} className={styles.toggle}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={24} color={theme === "dark" ? "#fff" : "#0d0d0d"} />
          ) : (
            <Menu size={24} color={theme === "dark" ? "#fff" : "#0d0d0d"} />
          )}
        </button>
      </div>

      {isMobile && (
        <ul className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ""}`}>
          {sections.map((item, index) => (
            <li
              key={item}
              style={{ transitionDelay: menuOpen ? `${index * 100}ms` : "0ms" }}
              className={styles.mobileOverlayItem}
            >
              <a href={`#${item}`} onClick={(e) => handleClick(e, item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
