import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/slider.scss";
import arrowLeft from "../../src/assets/previous.png";
import arrowRight from "../../src/assets/next.png";
import arrowLeftHover from "../../src/assets/previoushover.png";
import arrowRightHover from "../../src/assets/nexthover.png";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const [leftOver, setLeftOver] = useState(false);
  const [rightOver, setRightOver] = useState(false);

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
                      <a href="https://styrale.github.io/Projet-3/">
                        <img src={project.image} alt={project.alt} />
                      </a>
                    ) : index === 1 ? (
                      <a href="https://styrale.github.io/Projet4OhMyFood/">
                        <img src={project.image} alt={project.alt} />
                      </a>
                    ) : index === 4 ? (
                      <a href="https://styrale.github.io/Projet8">
                        <img src={project.image} alt={project.alt} />
                      </a>
                    ) : (
                      <Link to={project.link}>
                        <img src={project.image} alt={project.alt} />
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
        <div
          title="Projet Précédent"
          onMouseOver={() => setLeftOver(true)}
          onMouseOut={() => setLeftOver(false)}
          className="slider-previous"
          onClick={prevSlide}
        >
          <img
            src={leftOver ? arrowLeftHover : arrowLeft}
            alt="Flèche pointant vers la gauche"
          />
        </div>
        <div
          title="Projet Suivant"
          onMouseOver={() => setRightOver(true)}
          onMouseOut={() => setRightOver(false)}
          className="slider-next"
          onClick={nextSlide}
        >
          <img
            src={rightOver ? arrowRightHover : arrowRight}
            alt="Flèche pointant vers la droite"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
