import type React from "react";
import { useState } from "react";
import "./Header.css";
import { UseBakOfficeContext } from "../../hooks/UseBakOffice";
import ConnectionBnt from "./ConnectionBnt/ConnectionBnt";
import ModalGestionCompte from "./GestionCompte/ModalGestionCompte";

const Header: React.FC = () => {
  //récupère le bakOfficeContext
  const { bakOffice } = UseBakOfficeContext();
  //state de si le modal est ouvert ou non
  const [modalConnection, setmodalConnection] = useState(false);

  const MesReservations = () => {
    if (bakOffice?.compteConnecter !== null) {
      return (
        <a href="/MesReservations" className="navbar-link">
          Mes réservations
        </a>
      );
    }
  };

  return (
    <div className="header-container">
      <header className="header">
        <img
          src="/images/images_header/strasgite_logo.jpg"
          id="logo"
          alt="Logo"
        />
        <nav className="navbar">
          <a href="#filterBarre" className="navbar-link">
            Nos chambres
          </a>
          {MesReservations()}
          <link />
          <a href="#contact" className="navbar-link">
            Contact
          </a>
          {/* bouton de connection */}
          <ConnectionBnt
            modalConnection={modalConnection}
            setmodalConnection={setmodalConnection}
          />
        </nav>
      </header>
      <div className="chateau">
        <img
          src="/images/images_header/chateau.jpeg"
          alt="Château"
          className="chateau-image"
        />
        <h1 className="StraGite">StraGite</h1>
        <p className="chateau-text">
          Séjournez au cœur de Strasbourg, à quelques pas du Parlement Européen,
          et profitez de nos chambres d’hôtes confortables et accueillantes,
          idéales pour vos déplacements professionnels. Un lieu de détente et de
          convivialité, pensé pour vos besoins.
        </p>
      </div>
      {/* modal */}
      {modalConnection ? (
        <ModalGestionCompte setmodalConnection={setmodalConnection} />
      ) : null}
    </div>
  );
};

export default Header;
