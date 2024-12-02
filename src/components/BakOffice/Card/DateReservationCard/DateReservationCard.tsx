import "./DateReservationCard.css";

function obtenirJourSemaine(dateStr: string) {
  const date = new Date(dateStr); // Créer un objet Date à partir de la chaîne
  const joursSemaine = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];

  // Retourner le jour de la semaine à partir de l'objet Date
  return joursSemaine[date.getDay()];
}

const DateReservationCard = ({
  nuit,
  arriver,
  depart,
}: { nuit: number; arriver: string; depart: string }) => {
  return (
    <div className="date-reservation">
      <p>
        {obtenirJourSemaine(arriver)} {arriver.slice(8, 10)}.
        {arriver.slice(5, 7)} - {obtenirJourSemaine(depart)}{" "}
        {depart.slice(8, 10)}.{depart.slice(5, 7)} ({nuit} jours)
      </p>
    </div>
  );
};

export default DateReservationCard;
