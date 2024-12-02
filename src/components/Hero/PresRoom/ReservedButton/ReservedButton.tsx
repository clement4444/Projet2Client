import "./ReservedButton.css";
import { useNavigate } from "react-router-dom";
import { UseBakOfficeContext } from "../../../../hooks/UseBakOffice";
import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";

function ReservedButton() {
  const navigate = useNavigate();
  //importe le contexe UseBakOfficeContext
  const { bakOffice, setBakOffice } = UseBakOfficeContext();
  //importe la copie de API
  const { copieApi } = UseCopieApiContext();
  //importe index roome
  const { indexRoom } = UseIndexRoomContext();

  const handleClick = () => {
    //verifier que un compte est connecter
    if (bakOffice?.compteConnecter !== null) {
      //choiri le nouvelle id de chambre
      const newIdChambreSelect = copieApi[indexRoom].id;
      if (bakOffice) {
        setBakOffice({
          ...bakOffice,
          compteConnecter: bakOffice.compteConnecter ?? null,
          idChambreSelect: newIdChambreSelect,
        });
      }
      navigate("/reserve"); // Redirige vers la page /reserve
    } else {
      alert("Vous devez vous connecter pour réserver une chambre");
    }
  };

  return (
    <div>
      <button className="toBook" type="button" onClick={handleClick}>
        Réserver
      </button>
    </div>
  );
}

export default ReservedButton;
