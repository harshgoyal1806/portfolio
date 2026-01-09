import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <h1 className="contact-heading">Contact me</h1>
      <p className="contact-line">
        Feel free to reach out to me anytime—I’m just a message away!
      </p>
      <p>
        You can reach me at:{" "}
        <a href="mailto:hgoyal1806@gmail.com">hgoyal1806@gmail.com</a>
      </p>
      <div className="social-icons">
        <a
          href="https://instagram.com/g0yal_harsh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://leetcode.com/u/harshGoyal12/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <img
            src="https://assets.leetcode.com/static_assets/public/icons/favicon-96x96.png"
            alt="LeetCode"
            style={{ width: "28px", height: "28px" }}
          />
        </a>
        <a
          href="https://github.com/harshgoyal1806"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/harsh-goyal-986"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
