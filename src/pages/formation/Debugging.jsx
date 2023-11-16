import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import "../../../sass/events.scss";
import bad from "../../assets/p10bad.jpg";
import good from "../../assets/p10good.jpg";

function Debugging() {
  useEffect(() => {
    document.title = "724Events";
  }, []);
  return (
    <div className="main">
      <Header />
      <section className="section-events">
        <div className="description">
          <p>
            Pour cette mission, j'ai été contacté par le Directeur Marketing de
            724events (le projet a changé récemment sans doute car parfois le
            nom de l'entreprise est 77events), Jean Baptiste, pour remplacer un
            developpeur front-end qui avait déjà travaillé sur le projet. Le
            site était terminé dans les grandes lignes mais la plupart des
            fonctionnalités avaient un problème au niveau du code. L'objectif du
            projet était de rendre le site utilisable au moyen de débugging fait
            par tests.
          </p>
          <p>Au cours d'un appel visio, il me transmet la liste des bugs :</p>
          <ul>
            <li>
              -le slider affiche une image blanche quand on le fait défiler
            </li>
            <li>-les événements ne s'affichent pas dans le bon ordre</li>
            <li>-la barre de navigation ne marche pas</li>
            <li>-le filtrage ne marche pas dans la liste</li>
            <li>-les mois ne sont pas bons et parfois vides</li>
            <li>
              -le formulaire n'affiche pas de message de confirmation -le
              dernier projet ne s'affiche pas
            </li>
          </ul>
          <p>
            Ce projet m'a appris a utiliser les outils de débug d'un site comme
            jest ou Google React Tools afin d'avoir un site stable dans la
            durée. De plus, le code original du site ne vient pas de moi, me
            permettant de rapidement prendre mes marques sur le travail d'un
            autre en cas de remplacement en plein milieu d'un projet.
          </p>
        </div>
        <div className="links">
          <div className="bad">
            <a
              href="https://github.com/OpenClassrooms-Student-Center/Debuggez-une-application-React.JS"
              className="bad-link"
            >
              <p>Visiter le code donné au départ</p>
              <img src={bad}></img>
            </a>
          </div>
          <div className="good">
            <a href="https://github.com/Styrale/Projet10" className="good-link">
              <img src={good}></img>
              <p>Visiter le code du site fonctionnel</p>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Debugging;
