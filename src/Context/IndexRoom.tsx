import type React from "react";
import { type ReactNode, createContext, useState } from "react";

// Définition du type pour le contexte
type IndexRoomContextType = {
  indexRoom: number;
  setIndexRoom: React.Dispatch<React.SetStateAction<number>>;
};

// Création du contexte
const IndexRoomContext = createContext<IndexRoomContextType | null>(null);

interface IndexRoomProviderProps {
  children: ReactNode; // Déclare que children est un ReactNode
}

export const IndexRoomProvider: React.FC<IndexRoomProviderProps> = ({
  children,
}) => {
  const [indexRoom, setIndexRoom] = useState(0);

  return (
    <IndexRoomContext.Provider value={{ indexRoom, setIndexRoom }}>
      {children} {/* Ici, tu passes les enfants dans le Provider */}
    </IndexRoomContext.Provider>
  );
};

export default IndexRoomContext;
