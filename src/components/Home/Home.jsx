import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`about-container ${theme}`}>
      <div className="about-details">
        <img
          className="about-image"
          src="/images/harshimg.jpeg"
          alt="Illustration of a boy"
        />
        <p>Hi, I’m Harsh.</p>
      </div>

      <div className="about-text">
        <h1>Crafting Modern Web Experiences.</h1>
        <p>
          Passionate about building responsive, user-friendly web applications
          while continuously learning and exploring modern technologies.
        </p>
      </div>

      <a
        href="/harshResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="about-resume"
      >
        Resume <i className="fa-solid fa-arrow-right"></i>
      </a>
    </section>
  );
};

export default Home;
