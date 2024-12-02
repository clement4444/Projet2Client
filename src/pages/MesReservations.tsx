import { useNavigate } from "react-router-dom";
import Card from "../components/BakOffice/Card/Card";
import { UseApiContext } from "../hooks/UseApi";
import { UseBakOfficeContext } from "../hooks/UseBakOffice";
import "./MesReservations.css";
import calculerJoursEcarts from "../hooks/calculerJoursEcarts";

const MesReservations = () => {
  const navigate = useNavigate();
  const { bakOffice } = UseBakOfficeContext();
  const { api } = UseApiContext();
  //copie de la liste des reservations
  const listReservations =
    bakOffice?.compte[bakOffice.compteConnecter ?? 0]?.reservation;

  interface Reservation {
    id: number;
    dateDebut?: string;
    dateFin?: string;
  }

  function afficherCarde(reservation: Reservation, tour: number) {
    //id de la chambre selectionner port rapport a api
    const index = api.findIndex((chambre) => chambre.id === reservation.id);

    //definr le nomre de nuit
    const arriver =
      bakOffice?.compte[bakOffice.compteConnecter ?? 0]?.reservation[tour]
        .dateDebut;
    const depart =
      bakOffice?.compte[bakOffice.compteConnecter ?? 0]?.reservation[tour]
        .dateFin;
    const nuit = calculerJoursEcarts(arriver ?? "", depart ?? "");

    if (index === -1) {
      return null;
    }

    return (
      <div key={tour} className="miniCard">
        <Card
          key={`${tour}card`}
          index={index}
          arriver={arriver ?? ""}
          depart={depart ?? ""}
          nuit={nuit}
        />
      </div>
    );
  }
  return (
    <div className="mesReservation">
      <div>
        {listReservations?.map((reservation, tour: number) =>
          afficherCarde(reservation, tour),
        )}
      </div>
      <button
        className="bntRetourMesReservation"
        type="button"
        onClick={() => navigate("/")}
      >
        retour au site
      </button>
    </div>
  );
};

export default MesReservations;
