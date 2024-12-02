import { useContext } from "react";
import CopieApiContext from "../Context/CopieApi";

// Hook personnalisé pour simplifier l'utilisation de CopieApiContext
export const UseCopieApiContext = () => {
  const context = useContext(CopieApiContext);
  if (!context) {
    throw new Error("CopieApiContext non valide");
  }
  return context;
};
