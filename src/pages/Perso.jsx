import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../../sass/perso.scss";

function Projets() {
  return (
    <div className="main">
      <Header />
      <Link to="/projets">
        <div className="container">
          <div className="project_card">
            <img src="/perso/draftmaster/test.jpg"></img>
            <div className="summary">
              <h1>Draft Master</h1>
              <p>
                Cet utilitaire destiné au jeu compétitif League Of Legends
                analyse les forces et faiblesses des personnages composant votre
                équipe au fur et à mesure de la phase de sélection de
                personnages et conseille les personnages adaptés aux besoins de
                votre composition actuelle.
              </p>
              <p>
                L'outil donne également des clés de compréhension de la partie
                ainsi que les principales conditions de victoire des deux
                équipes. L'ajout de profils de joueurs personnalisés est
                également possible.
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="https://www.youtube.com/channel/UC5HYJTpconGuwC8g-l1QXLg">
        <div className="container">
          <div className="project_card">
            <div className="summary">
              <h1>Thaehan</h1>
              <p>
                Ce musicien bordelais passe par tous les styles possibles, de
                l'electro au metal en passant par le chillhop en y ajoutant sa
                propre patte caractéristique. Ayant récemment composé des
                morceaux pour le label Lofi Girl, je lui ai proposé de faire un
                site Web pour sa musique, ce qu'il a accepté.
              </p>
              <p>
                Le contenu du site doit encore être mis au point avec Thaehan
                mais des fonctionnalités comme une discographie, un lecteur
                intégré et du téléchargement de fichiers seront très
                probablement présentes.
              </p>
            </div>
            <img src="/perso/thaehan/test.jpg"></img>
          </div>
        </div>
      </Link>
      <Footer />
    </div>
  );
}

export default Projets;
