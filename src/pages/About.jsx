import React from "react";
import HeaderAbout from "./../components/HeaderAbout";
import Footer from "../components/Footer";
import "./../../sass/about.scss";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "A Propos - Lucas Hammerer";
  }, []);

  return (
    <div className="main">
      <HeaderAbout />
      <div className="about">
        <div>
          <h2>MA FORMATION</h2>
          <p>
            Mon parcours dans le monde de la technologie a débuté avec une
            passion pour l'informatique, et au fil des années, j'ai transformé
            cette passion en une carrière passionnante. Mon parcours m'a conduit
            à explorer les facettes de la création de sites Web, du design à
            l'intégration, en passant par l'optimisation de l'expérience
            utilisateur. Ma formation chez OpenClassrooms m'a permis d'acquérir
            des compétences techniques solides, notamment en HTML, CSS,
            JavaScript et React, et m'a fourni les bases nécessaires pour créer
            des sites Web modernes et fonctionnels. Je suis constamment à
            l'affût des dernières tendances et des meilleures pratiques de
            développement Web, et j'aime relever les défis techniques qui se
            présentent à moi.
          </p>
        </div>
        <div>
          <h2 className="titre-droite">MES OBJECTIFS</h2>
          <p className="texte-droite">
            Mon parcours de formation n'est qu'une première étape dans ma
            carrière de développeur Web. À l'avenir, je vise à élargir mes
            compétences en explorant des technologies avancées et en
            approfondissant mes connaissances en développement frontend. Je suis
            passionné par la création de sites Web et d'applications qui
            améliorent l'expérience des utilisateurs et qui ont un impact
            positif sur le monde numérique. Mon objectif est de contribuer à des
            projets innovants qui repoussent les limites de la technologie tout
            en restant attentif aux besoins des utilisateurs. Je crois fermement
            que la technologie peut être un puissant moteur de changement, et je
            m'efforce de contribuer à cet objectif en créant des solutions Web
            efficaces et conviviales. Mon désir d'apprentissage constant et mon
            engagement envers l'amélioration continue sont des atouts que je
            mets au service de chaque projet auquel je participe. Je suis ravi
            de continuer à évoluer en tant que développeur Web et de participer
            à des projets innovants. Si vous partagez cette passion pour la
            technologie et que vous cherchez un collaborateur enthousiaste et
            dévoué, n'hésitez pas à me contacter.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
