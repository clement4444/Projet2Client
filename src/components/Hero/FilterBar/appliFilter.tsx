import { useEffect } from "react";
import { UseApiContext } from "../../../hooks/UseApi";
import { UseBakOfficeContext } from "../../../hooks/UseBakOffice";
import { UseCopieApiContext } from "../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../hooks/UseIndexRoom";

const appliFilter = (
  optionCocher: string[],
  textSearchBar: string,
  likeChecked: boolean,
) => {
  const { copieApi, setCopieApi } = UseCopieApiContext();
  const { api } = UseApiContext();
  const { indexRoom, setIndexRoom } = UseIndexRoomContext();
  const { bakOffice } = UseBakOfficeContext();

  //actualiser la copi api a chaque modification
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    //parti verif option--------------------------------------
    let newApi = [...api];
    //filtre tout les élément qui respect pas les filtre
    newApi = newApi.filter((chambre) => {
      //décompose élement en équipement
      const equipements = chambre.equipements;
      //verifie que tout les équipement selectioner sont dans la chambre
      if (
        optionCocher.every((element: string) => equipements.includes(element))
      ) {
        return true;
      }
      return false;
    });
    //parti recharche-------------------------------------------
    newApi = newApi.filter((chambre) =>
      chambre.nom.toLowerCase().includes(textSearchBar.toLowerCase()),
    );

    //parti like-----------------------------------------------
    // verifie que il a un compte de connecter
    if (bakOffice?.compteConnecter !== null) {
      // si la case a cocher est cocher
      if (likeChecked) {
        //filtre les chambre qui sont dans les favorie
        newApi = newApi.filter(
          (chambre) =>
            bakOffice?.compteConnecter !== null &&
            bakOffice?.compte[bakOffice.compteConnecter].favorite.includes(
              chambre.id,
            ),
        );
      }
    }

    // parti changer index de la chambre-------------------------
    //verifer que la newApi n'est pas vide
    if (newApi.length > 0 && copieApi.length > 0) {
      //recupere l'id de la chambre actuel
      const idRoom = copieApi[indexRoom].id;
      //recupere l'emplacement de la chambre dans la liste en fonction de l'id
      const newIdRoom = newApi.findIndex((chambre) => chambre.id === idRoom);
      //si la chambre a été sup par le filtre repartire de 0
      if (newIdRoom === -1) {
        setIndexRoom(0);
      } else {
        setIndexRoom(newIdRoom);
      }
    }

    //applique les filtre---------------------------------------
    setCopieApi(newApi);
  }, [optionCocher, textSearchBar, likeChecked]);
};

export default appliFilter;
