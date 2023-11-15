import React, { useState } from "react";
import Modal from "react-modal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../../sass/product_page.scss";
import { useEffect } from "react";

Modal.setAppElement("#root");

function NinaCarducci() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    document.title = "Nina Carducci";
  }, []);

  return (
    <div className="main_container">
      <Header />
      <div className="slides">
        <h3>
          Voici un avant/après des audits Lighthouse et Wave réalisés sur le
          site de la cliente :
        </h3>
      </div>
      <div className="project_page">
        {["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"].map(
          (image, index) => (
            <div key={index} className="image_container">
              <img
                src={`/formation/projet9/${image}`}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            </div>
          )
        )}
      </div>

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={handleCloseModal}
        contentLabel="Image Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <img
          src={`/formation/projet9/${
            selectedImage !== null ? `slide${selectedImage + 1}.jpg` : ""
          }`}
          alt={`Image ${selectedImage + 1}`}
        />
        <button className="close_button" onClick={handleCloseModal}>
          Fermer
        </button>
      </Modal>

      <Footer />
    </div>
  );
}

export default NinaCarducci;
