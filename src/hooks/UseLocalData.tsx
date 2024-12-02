// Définition des types pour les données
export type Reservation = {
  id: number;
  dateDebut?: string;
  dateFin?: string;
};

export type UserData = {
  mail: string;
  password: string;
  adresse: string;
  sex: string;
  prenom: string;
  nom: string;
  telephone: string;
  codePostal: number | null;
  ville: string;
  reservation: Reservation[];
  favorite: number[];
};

// Définition d'un type pour les données stockées dans LocalData
export type LocalDataType = {
  compteConnecter: number | null;
  idChambreSelect: number;
  compte: UserData[];
};

// Interface pour LocalData
interface ILocalData {
  set: (forcer?: boolean) => void;
}

// Implémentation de l'objet LocalData
export const LocalData: ILocalData = {
  set: (forcer = false) => {
    const donnerActuel = copyLocalData();
    // Vérifier que les données ne sont pas nulles et qu'on ne force pas le set
    if (donnerActuel === null || forcer) {
      // Set les données de base
      return setLocalData(creeData());
    }
  },
};

// Fonction pour copier les données actuelles depuis localStorage
function copyLocalData(): LocalDataType | null {
  // Charger les données actuelles
  const donnerActuel = localStorage.getItem("LocalData");
  // Caster pour avoir un tableau de UserData ou null
  return donnerActuel ? JSON.parse(donnerActuel) : null;
}

// Fonction pour définir les données dans localStorage
function setLocalData(donner: LocalDataType): void {
  localStorage.setItem("LocalData", JSON.stringify(donner));
}

// Fonction pour créer les données par défaut
function creeData(): LocalDataType {
  return {
    compteConnecter: null,
    idChambreSelect: 0,
    compte: [
      {
        mail: "admin@gmail.com",
        password: "mdp",
        sex: "homme",
        prenom: "projet2Admin",
        nom: "Nom",
        adresse: "adresse",
        telephone: "0777777777",
        codePostal: 18000,
        ville: "paris",
        reservation: [
          {
            id: 1,
            dateDebut: "2021-06-01",
            dateFin: "2021-06-10",
          },
        ],
        favorite: [],
      },
    ],
  };
}
