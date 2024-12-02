import { useContext } from "react";
import ApiContext from "../Context/Api";

// Hook personnalisé pour simplifier l'utilisation de CopieApiContext
export const UseApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("ApiContext non valide");
  }
  return context;
};
