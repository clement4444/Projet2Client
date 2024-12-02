import "./LikeButton.css";
import { UseBakOfficeContext } from "../../../../hooks/UseBakOffice";
import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";

const LikeButton = () => {
  //charger le contexte de bakoffice
  const { bakOffice, setBakOffice } = UseBakOfficeContext();
  const { copieApi } = UseCopieApiContext();
  const { indexRoom } = UseIndexRoomContext();

  // fonction like
  function handleLike() {
    //verifier que le bak office est bien chargé
    if (bakOffice) {
      if (bakOffice.compteConnecter !== null) {
        //récupère les donner
        const compteLike = bakOffice.compte[bakOffice.compteConnecter].favorite;

        //verifier si la chambre est déjà liker
        if (compteLike.includes(copieApi[indexRoom].id)) {
          //supprime le like
          compteLike.splice(compteLike.indexOf(copieApi[indexRoom].id), 1);
        } else {
          //ajoute le like
          compteLike.push(copieApi[indexRoom].id);
        }
        //defini le nouveau like
        const updateCompte = {
          ...bakOffice.compte[bakOffice.compteConnecter],
          favorite: compteLike,
        };
        //set le bakoffice avec le nouveau like
        setBakOffice({
          ...bakOffice,
          compte: [
            ...bakOffice.compte.slice(0, bakOffice.compteConnecter),
            updateCompte,
            ...bakOffice.compte.slice(bakOffice.compteConnecter + 1),
          ],
        });
      } else {
        alert("Vous devez être connecté pour liker une chambre");
      }
    }
  }

  function styleLike() {
    //verifi que le bakeoffice est bien chargé
    if (bakOffice) {
      //verifi que un compte est connecté
      if (bakOffice.compteConnecter !== null) {
        if (
          bakOffice.compte[bakOffice.compteConnecter].favorite.includes(
            copieApi[indexRoom].id,
          )
        ) {
          return "❤️";
        }
      }
    }
    return "🤍";
  }

  return (
    <>
      <button className="likeButton" type="button" onClick={() => handleLike()}>
        {styleLike()}
      </button>
    </>
  );
};

export default LikeButton;
