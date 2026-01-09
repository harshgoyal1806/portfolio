import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`about-container ${theme}`}>
      <div className="about-details">
        <img
          className="about-image"
          src="/images/harshImg.jpeg"
          alt="Illustration of a boy"
        />
        <p>Hi, I’m Harsh.</p>
      </div>

      <div className="about-text">
        <h1>
          Building digital <br /> products, brands, and experiences.
        </h1>
        <p>
          Experienced in full-stack development, I create performant web apps
          by integrating modern frontend frameworks with scalable backend
          architectures.
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
