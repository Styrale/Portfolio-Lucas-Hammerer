import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import "../../../sass/banque.scss";

function ArgentBank() {
  useEffect(() => {
    document.title = "ArgentBank";
  }, []);
  return (
    <div className="main">
      <Header />
      <h1>Fonctionnalités Principales du Site : </h1>

      <section className="section-bank">
        <h2>Affichage Conditionnel et Récupération de Données</h2>
        <p>
          Le site affiche différents éléments selon la statut de connexion de
          l'utilisateur. Un utilisateur déconnecté verra un lien vers la page de
          connexion tandis qu'un utilisateur connecté verra son nom apparaître,
          renvoyant vers son profil, et une option de déconnexion. Le nom est
          récupéré depuis une base de données pour afficher l'identifiant choisi
          par l'utilisateur.
        </p>
        <div className="images-bank">
          <div className="img-bank">
            <img src="/formation/projet11/barre1.png"></img>
          </div>
          <div className="img-bank">
            <img src="/formation/projet11/barre2.png"></img>
          </div>
        </div>
      </section>

      <section className="section-bank">
        <h2>Changement de Nom</h2>
        <p>
          L'utilisateur peut modifier son pseudo à tout instant. Néanmoins, son
          nom civil n'est pas modifiable.
        </p>
        <div className="edit">
          <img src="/formation/projet11/edit.png"></img>
          <img src="/formation/projet11/edit2.png"></img>
          <img src="/formation/projet11/edit3.png"></img>
        </div>
      </section>

      <section className="section-bank">
        <h2>Ecriture de Routes API</h2>
        <p>
          Le projet demandait aussi d'écrire des routes API qui n'existaient pas
          encore afin de gérer les virements individuellement. Il fallait
          pouvoir les récupérer tous, en cibler un et lui apporter des
          modifications. Cet exercice n'était que théorique mais permet de se
          familiariser avec l'environnement d'une base de données.
        </p>
        <div className="addimage">
          <div>
            <img src="/formation/projet11/api.png"></img>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ArgentBank;
