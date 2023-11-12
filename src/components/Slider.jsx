import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/slider.scss";
import arrowLeft from "../../src/assets/previous.png";
import arrowRight from "../../src/assets/next.png";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <div className="slider">
        {slides.map((project, index) => {
          return (
            <div
              key={index}
              className={index === current ? "active-picture" : ""}
            >
              {index === current && (
                <>
                  <div className="project-card">
                    <h3>{project.title}</h3>
                    {index === 0 ? (
                      <a href="./../../sites/Booki/index.html">
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="slider-picture"
                        />
                      </a>
                    ) : index === 1 ? (
                      <a href="./../../sites/OhMyFood/index.html">
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="slider-picture"
                        />
                      </a>
                    ) : (
                      <Link to={project.link}>
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="slider-picture"
                        />
                      </Link>
                    )}
                  </div>
                  <div className="description">
                    <h3>Description du projet</h3>
                    <div className="paragraphe">
                      <p className="part-one">{project.description}</p>
                      <p className="part-two">{project.objectifs}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
        {}
        {length > 1 ? <></> : null}
      </div>
      <div className="navigation">
        <div className="slider-previous" onClick={prevSlide}>
          <img src={arrowLeft} alt="Flèche pointant vers la gauche" />
        </div>
        <div className="slider-next" onClick={nextSlide}>
          <img src={arrowRight} alt="Flèche pointant vers la droite" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
