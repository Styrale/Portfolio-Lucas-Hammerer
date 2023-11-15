import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import "../../../sass/sophie.scss";

function SophieBluel() {
  useEffect(() => {
    document.title = "Sophie Bluel";
  }, []);
  return (
    <div>
      <Header />
      <h1>Fonctionnalités Principales du Site : </h1>

      <section className="section">
        <h2>Filtrage par Catégorie</h2>
        <p>
          Le site offre la possibilité de filtrer les images par catégorie,
          permettant aux utilisateurs de visualiser des images spécifiques en
          fonction de leurs intérêts.
        </p>
        <div className="images">
          <div className="img">
            <img src="/formation/projet6/filtres1.jpg"></img>
          </div>
          <div className="img">
            <img src="/formation/projet6/filtres2.jpg"></img>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Page de Connexion</h2>
        <p>L'accès aux fonctionnalités avancées nécessite une connexion.</p>
        <div className="login">
          <img src="/formation/projet6/login.jpg"></img>
          <p>
            Les administrateurs peuvent s'authentifier pour bénéficier d'options
            supplémentaires.
          </p>
          <img className="modify" src="/formation/projet6/modify.jpg"></img>
        </div>
      </section>

      <section className="section">
        <h2>Ajout d'une Nouvelle Image</h2>
        <p>
          Une fois connecté, l'administrateur a la possibilité d'ajouter de
          nouvelles images à la galerie au fur et à mesure que l'architecte
          réalise de nouveaux projets.
        </p>
        <div className="addimage">
          <div>
            <img src="/formation/projet6/addimage.jpg"></img>
          </div>
          <p>
            L'image apparaît ensuite dans la galerie aux côtés des autres
            réalistations.
          </p>
          <div>
            <img src="/formation/projet6/gallery2.jpg"></img>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Suppression d'une Image</h2>
        <p>
          Les administrateurs connectés peuvent également supprimer des images
          de la galerie s'ils le souhaitent en cliquant simplement sur la croix
          rouge dans le coin supérieur droit de l'image. Cela offre un contrôle
          total sur le contenu visuel du site.
        </p>
        <img src="/formation/projet6/gallery.jpg"></img>
      </section>
      <Footer />
    </div>
  );
}

export default SophieBluel;
