import { createContext, useEffect, useState } from "react";
import { LocalData } from "../hooks/UseLocalData";
import type { LocalDataType } from "../hooks/UseLocalData";

// Création d'un nouveau contexte
interface BakOfficeContextType {
  bakOffice: LocalDataType | null;
  setBakOffice: React.Dispatch<React.SetStateAction<LocalDataType | null>>;
}

const BakOfficeContext = createContext<BakOfficeContextType | null>(null);

import type { ReactNode } from "react";

const BakOfficeProvider = ({ children }: { children: ReactNode }) => {
  //set le local stockage
  LocalData.set();
  const [bakOffice, setBakOffice] = useState(() => {
    const localData = localStorage.getItem("LocalData");
    return localData ? JSON.parse(localData) : null;
  });

  //met a jour le local storage
  useEffect(() => {
    localStorage.setItem("LocalData", JSON.stringify(bakOffice));
  }, [bakOffice]);

  return (
    <BakOfficeContext.Provider value={{ bakOffice, setBakOffice }}>
      {children}
    </BakOfficeContext.Provider>
  );
};

export { BakOfficeContext, BakOfficeProvider };
