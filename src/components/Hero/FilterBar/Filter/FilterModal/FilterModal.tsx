import { useState } from "react";
import type React from "react";
import { UseApiContext } from "../../../../../hooks/UseApi";
import ButtonAppli from "./ButtonAppli/ButtonAppli";
import FilterCocher from "./FilterCocher/FilterCocher";

// Composant Modal
interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (filters: string[]) => void;
  availableEquipments: string[];
  selectedEquipments: string[];
  optionCocher: string[];
  setOptionCocher: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterModal = ({
  isOpen,
  onClose,
  onApplyFilter,
  selectedEquipments,
  optionCocher,
  setOptionCocher,
}: FilterModalProps) => {
  const [filters] = useState(selectedEquipments);
  //récupé le contexte index
  const { api } = UseApiContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onApplyFilter(filters); // Appliquer les filtres
    onClose(); // Fermer la modal
  };

  if (!isOpen) return null;

  //partie pour la gestion des élement

  //récuéré tout les nom option
  const listeOptionExitante: string[] = [];

  //parcourir tout api pour apprendre tout les option disponilbe
  for (const element of api) {
    for (const item of element.equipements) {
      if (!listeOptionExitante.includes(item)) {
        listeOptionExitante.push(item);
      }
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button type="button" className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Filtres par équipements</h2>
        <form onSubmit={handleSubmit}>
          <div className="listCocher">
            {listeOptionExitante.map((item) => {
              return (
                <FilterCocher
                  option={item}
                  key={item}
                  optionCocher={optionCocher}
                  setOptionCocher={setOptionCocher}
                />
              );
            })}
          </div>

          <ButtonAppli />
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
