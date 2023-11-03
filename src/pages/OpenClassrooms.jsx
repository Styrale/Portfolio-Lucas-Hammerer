import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import "./../../sass/openclassrooms.scss";

const projects = [
  {
    title: "Projet 3 : Booki",
    description:
      "L'objectif de ce site Web était de coder entièrement le CSS d'un site recensant des hebergements et activités à partir du modèle d'une maquette. Le site devait être responsive en mobile et tablette, en plus du format desktop de base.",
    objectifs:
      "A la fin de ce projet, j'ai ainsi utilisé de nombreuses fonctionnalités CSS et je suis capable de mettre en page un site sans aucun problème.",
    image: "./public/formation/projet3/preview.jpg",
    alt: "Image d'un site d'hébergements",
    link: "booki",
  },
  {
    title: "Projet 4 - OhMyFood",
    description:
      "Avec les bases du CSS en poche, il était temps de s'attaquer à un plus gros défi : les animations CSS. Le but de ce site était de créer une application de restauration rapide de luxe, entièrement pensée pour mobile avec un support tablette et desktop minimal.",
    objectifs:
      "Ainsi, on trouve diverses animations sur le site, d'un loader permettant de faire patienter l'utilisateur lors du chargement de la page à une animation de favori pour les restaurants en passant par une arrivée animée des menus sur les pages de restaurants.",
    image: "./public/formation/projet4/preview.jpg",
    alt: "",
    link: "ohmyfood",
  },
  {
    title: "Projet 6 - Sophie Bluel",
    description: "Ma bite",
    objectifs: "Mes couilles",
    image: "./public/formation/projet4/preview.jpg",
    alt: "",
    link: "sophie-bluel",
  },
  {
    title: "Projet 7 - Qwenta",
    description: "Ma bite",
    objectifs: "Mes couilles",
    image: "./public/formation/projet4/preview.jpg",
    alt: "",
    link: "qwenta",
  },
  {
    title: "Projet 8 - Kasa",
    description: "Ma bite",
    objectifs: "Mes couilles",
    image: "./public/formation/projet4/preview.jpg",
    alt: "",
    link: "kasa",
  },
  {
    title: "Projet 9 - Nina Carducci",
    description: "Ma bite",
    objectifs: "Mes couilles",
    image: "./public/formation/projet4/preview.jpg",
    alt: "",
    link: "nina-carducci",
  },
  {
    title: "Projet 10 - 724Events",
    description: "Ma bite",
    objectifs: "Mes couilles",
    image: "./public/formation/projet4/preview.jpg",
    alt: "",
    link: "724events",
  },
  {
    title: "Projet 11 - Argent Bank",
    description: "Ma bite",
    objectifs: "Mes couilles",
    image: "./public/formation/projet4/preview.jpg",
    alt: "",
    link: "argent-bank",
  },
];

function OpenClassrooms() {
  return (
    <div className="app">
      <Header />
      <div className="disclaimer-container">
        <p className="disclaimer">
          La formation OpenClassrooms que j'ai suivi se compose de 12 projets,
          répartis sur une durée de 6 mois, mais les projets 1, 2 et 6 ne sont
          pas suffisament conséquents pour apparaître dans ce carrousel, tandis
          que le projet 12 consiste en la réalisation d'un portfolio.{" "}
        </p>
      </div>
      <Slider slides={projects} />
      <Footer />
    </div>
  );
}

export default OpenClassrooms;
