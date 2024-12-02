import { useNavigate } from "react-router-dom";
import { UseApiContext } from "../../../../hooks/UseApi";
import { UseBakOfficeContext } from "../../../../hooks/UseBakOffice";
import "./BtnValider.css";

const BtnValider = ({
  index,
  arriver,
  depart,
}: { index: number; arriver: string; depart: string }) => {
  const navigate = useNavigate();
  const { bakOffice, setBakOffice } = UseBakOfficeContext();
  const { api } = UseApiContext();

  function handleClick() {
    if (bakOffice) {
      //met a jour les reservation du compte
      //récupère les donner
      if (bakOffice.compteConnecter !== null) {
        //definir id de la chambre
        const id = api[index].id;

        setBakOffice({
          ...bakOffice,
          compte: [
            ...bakOffice.compte.slice(0, bakOffice.compteConnecter),
            {
              ...bakOffice.compte[bakOffice.compteConnecter],
              reservation: [
                ...bakOffice.compte[bakOffice.compteConnecter].reservation,
                {
                  dateDebut: arriver,
                  dateFin: depart,
                  id: id,
                },
              ],
            },
            ...bakOffice.compte.slice(bakOffice.compteConnecter + 1),
          ],
        });
        navigate("/");
      }
    }
  }

  return (
    <button
      type="button"
      className="bouton-validerReservation"
      onClick={() => handleClick()}
    >
      VALIDER MA RÉSERVATION
    </button>
  );
};

export default BtnValider;
