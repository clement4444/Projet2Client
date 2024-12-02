import { useContext } from "react";
import { BakOfficeContext } from "../Context/BakOffice";

// Hook personnalisé pour simplifier l'utilisation de CopieApiContext
export const UseBakOfficeContext = () => {
  const context = useContext(BakOfficeContext);
  if (!context) {
    throw new Error("CopieApiContext non valide");
  }
  return context;
};
