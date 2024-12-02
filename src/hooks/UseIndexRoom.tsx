import { useContext } from "react";
import IndexRoomContext from "../Context/IndexRoom";

// Hook personnalisé pour simplifier l'utilisation de CopieApiContext
export const UseIndexRoomContext = () => {
  const context = useContext(IndexRoomContext);
  if (!context) {
    throw new Error("IndexRoomContext non valide");
  }
  return context;
};
