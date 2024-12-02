import { type ReactNode, createContext, useState } from "react";

// Définir le type de la chambre
type Chambre = {
  id: number;
  nom: string;
  description: string;
  emplacement: string;
  capacite: number;
  prix_par_nuit: number;
  equipements: string[];
  image_url: string;
};

// Définir le type pour le contexte
type CopieApiContextType = {
  copieApi: Chambre[];
  setCopieApi: React.Dispatch<React.SetStateAction<Chambre[]>>; // Ajout de setApi ici
};

const CopieApiContext = createContext<CopieApiContextType | null>(null);

interface IndexRoomProviderProps {
  children: ReactNode; // Déclare que children est un ReactNode
}

export const CopieApiProvider: React.FC<IndexRoomProviderProps> = ({
  children,
}) => {
  // État de l'API avec une valeur initiale
  const premierChambre: Chambre[] = [
    {
      id: 1,
      nom: "La Suite Alsacienne",
      description:
        "Une chambre au style traditionnel alsacien, avec poutres apparentes et mobilier en bois sculpté.",
      emplacement: "Strasbourg, France",
      capacite: 2,
      prix_par_nuit: 150,
      equipements: [
        "Wi-Fi",
        "Salle de bain privée",
        "Petit-déjeuner inclus",
        "Vue sur la ville",
      ],
      image_url:
        "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg",
    },
  ];

  // Déclaration de l'état api
  const [copieApi, setCopieApi] = useState<Chambre[]>(premierChambre);

  return (
    <CopieApiContext.Provider value={{ copieApi, setCopieApi }}>
      {children}
    </CopieApiContext.Provider>
  );
};

export default CopieApiContext;
