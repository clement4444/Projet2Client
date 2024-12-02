import { useState } from "react";
import FilterModal from "./FilterModal/FilterModal.tsx";
import "./FilterModal.css";

// Déclaration du composant fonctionnel 'Filter'
interface FilterProps {
  optionCocher: string[];
  setOptionCocher: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: React.FC<FilterProps> = ({ optionCocher, setOptionCocher }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //'selectedEquipments' contiendra la liste des équipements sélectionnés par l'utilisateur.
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);
  // Fonction qui ouvre la modale en mettant à jour l'état 'isModalOpen' à 'true' et le ferme si l'état et 'false'.
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleApplyFilter = (filters: string[]) => {
    setSelectedEquipments(filters);
  };

  return (
    <div className="App">
      <button type="button" onClick={handleOpenModal}>
        Filtrer par équipements
      </button>
      <p>Équipements sélectionnés : {selectedEquipments.join(", ")}</p>
      <p>{optionCocher.join(", ")}</p>

      <FilterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onApplyFilter={handleApplyFilter}
        availableEquipments={[]} // Provide the availableEquipments array here
        selectedEquipments={selectedEquipments}
        optionCocher={optionCocher}
        setOptionCocher={setOptionCocher}
      />
    </div>
  );
};

export default Filter;
