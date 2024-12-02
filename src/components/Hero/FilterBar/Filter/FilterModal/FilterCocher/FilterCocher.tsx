import { useState } from "react";
import isDisabledOption from "./isDisabledOption";

function FilterCocher({
  option,
  optionCocher,
  setOptionCocher,
}: {
  option: string;
  optionCocher: string[];
  setOptionCocher: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  // Définir l'état pour savoir si la case est cochée ou non
  const [isChecked, setIsChecked] = useState(optionCocher.includes(option));
  // Fonction qui sera appelée lorsque la case est cochée/décochée
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      //verifi que élément n i est pas déja
      if (!optionCocher.includes(option)) {
        //ajoute option qui a été cocher
        setOptionCocher([...optionCocher, option]);
      }
    } else {
      //confirme qu'il exite avant de la sup
      if (optionCocher.includes(option)) {
        //index a sup
        const indexDel = optionCocher.indexOf(option);
        //sup l'option du state de filtre
        const newOptions = [...optionCocher];
        newOptions.splice(indexDel, 1);
        //push la liste sans option
        setOptionCocher(newOptions);
      }
    }
  };

  return (
    <div className="checkBox">
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={isChecked}
        disabled={isDisabledOption(optionCocher, option)}
      />
      <p>{option}</p>
    </div>
  );
}

export default FilterCocher;
