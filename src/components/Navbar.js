import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss"; // if using SCSS compile to CSS
import "../styles/themes.scss";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "earth"
  );

  const [open, setOpen] = useState(false);

  const themes = [
    { id: "ether", label: "Ether (Space)", color: "#d7d7dd" },
    { id: "air", label: "Air (Vayu)", color: "#a48bff" },
    { id: "fire", label: "Fire (Agni)", color: "#ff7a00" },
    { id: "water", label: "Water (Jal)", color: "#2196f3" },
    { id: "earth", label: "Earth (Prithvi)", color: "#4caf50" }
  ];

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="logo">Pancha Bhoota UI</div>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* THEME DROPDOWN */}
      <div className="dropdown">
        <button className="dropdown-btn" onClick={() => setOpen(!open)}>
          Themes ▼
        </button>

        <div className={`dropdown-menu ${open ? "open" : ""}`}>
          {themes.map((t) => (
            <div
              key={t.id}
              className="theme-option"
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
            >
              <span
                className="color-circle"
                style={{ background: t.color }}
              ></span>
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
