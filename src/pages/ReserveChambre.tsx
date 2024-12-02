import "./ReserveChambre.css";
import { useState } from "react";
import Card from "../components/BakOffice/Card/Card";
import CalendrierArriver from "../components/BakOffice/ReserverChambre/CalendrierArrival/CalendrierArriver";
import CalendrierDepart from "../components/BakOffice/ReserverChambre/CalendrierDepart/CalendrierDepart";
import BtnAnnulerReserver from "../components/BakOffice/ReserverChambre/bntAnnulerReserver/bntAnnulerReserver";
import BtnNbnuit from "../components/BakOffice/ReserverChambre/btnNbnuit/btnNbnuit";
import BtnValider from "../components/BakOffice/ReserverChambre/btnValider/bntValider";
import { UseApiContext } from "../hooks/UseApi";
import { UseBakOfficeContext } from "../hooks/UseBakOffice";
import calculerJoursEcarts from "../hooks/calculerJoursEcarts";

const ReserveChambre = () => {
  const { bakOffice } = UseBakOfficeContext();
  const { api } = UseApiContext();
  //id de la chambre selectionner port rapport a api
  const index = bakOffice
    ? api.findIndex((chambre) => chambre.id === bakOffice.idChambreSelect)
    : -1;

  //state pour géré le nombre de nuit
  //arriver
  const [arriver, setArriver] = useState("2024-11-16");

  //depart
  const [depart, setDepart] = useState("2024-11-17");

  return (
    <div className="reservation">
      <div className="reservation-card">
        <div className="reservation-header">
          <h1>RESERVATION</h1>
          <div className="conterDate">
            <CalendrierArriver arriver={arriver} setArriver={setArriver} />
            <CalendrierDepart depart={depart} setDepart={setDepart} />
          </div>
          <BtnNbnuit depart={depart} arriver={arriver} />
        </div>

        <div className="details">
          <Card
            index={index}
            nuit={calculerJoursEcarts(arriver, depart)}
            arriver={arriver}
            depart={depart}
          />
        </div>

        <div className="reservation-footer">
          <BtnValider index={index} arriver={arriver} depart={depart} />
          <BtnAnnulerReserver />
        </div>
      </div>
    </div>
  );
};

export default ReserveChambre;
