import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className={`navbar ${theme}`}>
        {/* Logo */}
        <h1 className="logo">
          <span className="first-letter">H</span>arsh Goyal
        </h1>

    
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          role="button"
          tabIndex={0}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </div>

      
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>

          {/* Theme toggle */}
          <li>
            <button
              className="nav-link theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i
                className={
                  theme === "light"
                    ? "fa-regular fa-moon"
                    : "fa-solid fa-sun"
                }
              ></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
