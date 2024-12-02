import { UseCopieApiContext } from "../../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../../hooks/UseIndexRoom";
import "./Switch.css";

const Switch = ({ direction }: { direction: string }) => {
  //récupé le contexte index
  const { indexRoom, setIndexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

  let classElement = "";
  let valeurElement = "";
  let incementation = 0;

  if (direction === "gauche") {
    classElement = "flecheGauche";
    valeurElement = "<";
    incementation = -1;
  } else if (direction === "droite") {
    classElement = "flecheDroite";
    valeurElement = ">";
    incementation = 1;
  }

  //function de rapelle
  const handleClick = () => {
    setIndexRoom(indexRoom + incementation);
  };

  //prédit le prochain index
  const indexRoomSuivant = indexRoom + incementation;
  //verifie que le prochain index est pas plus grand que le nb de chambre
  const isPossible =
    indexRoomSuivant >= 0 && indexRoomSuivant <= copieApi.length - 1;

  return (
    <>
      {isPossible && (
        <button
          className={`${classElement}`}
          onClick={handleClick}
          type="button"
        >
          {valeurElement}
        </button>
      )}
    </>
  );
};

export default Switch;
