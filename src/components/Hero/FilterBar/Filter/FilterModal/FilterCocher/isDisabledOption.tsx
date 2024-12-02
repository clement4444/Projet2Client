import { UseApiContext } from "../../../../../../hooks/UseApi";

const isDisabledOption = (optionCocher: string[], option: string) => {
  const { api } = UseApiContext();

  // Combine les options déjà cochées avec la nouvelle option potentielle
  const listeVerifier = [...optionCocher, option];

  // Vérifie si au moins un élément dans `api` contient toutes les options de `listeVerifier`
  const resultat = api.some((element) =>
    listeVerifier.every((option) => element.equipements.includes(option)),
  );

  // Si `resultat` est faux, cela signifie qu'il n'y a pas d'éléments qui correspondent
  return !resultat;
};

export default isDisabledOption;
