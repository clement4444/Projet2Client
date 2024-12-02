import { useState } from "react";
import Inscription from "./Inscription/Inscription";
import SeConnecter from "./SeConnecter/SeConnecter";
import "./ModalGestionCompte.css";

interface ModalGestionCompteProps {
  setmodalConnection: (value: boolean) => void;
}

const ModalGestionCompte = ({
  setmodalConnection,
}: ModalGestionCompteProps) => {
  const [pageInscription, SetpageInscription] = useState(false);
  return (
    <div className="modalCompte">
      {pageInscription ? (
        <Inscription SetpageInscription={SetpageInscription} />
      ) : (
        <SeConnecter
          SetpageInscription={SetpageInscription}
          setmodalConnection={setmodalConnection}
        />
      )}
    </div>
  );
};

export default ModalGestionCompte;
