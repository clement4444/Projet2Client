import { useEffect, useState } from "react";
import { UseCopieApiContext } from "../../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../../hooks/UseIndexRoom";
import "./IconOption.css";

const IconOption = ({ numeros }: { numeros: number }) => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

  //state de si l'image exite
  const [imageExists, setImageExists] = useState(true);

  //useEffect qui re donne une chance a image exiter a chaque changement
  useEffect(() => {
    if (indexRoom) {
      setImageExists(true); //met image en mod exite
    }
  }, [indexRoom]);

  //fuction eurreur qui change le state de image en case de crash
  const handleError = () => {
    setImageExists(false); //met image en non existante
  };

  //défini image normal
  const imageNormal = `/images/logoOption/${copieApi[indexRoom].equipements[numeros]}.png`;
  //défini l'image de remplacement
  const imageSecours = "/images/logoOption/logoOptionUniversel.png";

  //afficher le composant que si il a le nombre élément
  if (copieApi[indexRoom].equipements.length >= numeros + 1) {
    return (
      <div className="option">
        <img
          className="iconOption"
          src={imageExists ? imageNormal : imageSecours}
          onError={handleError}
          alt=""
        />
        <p className="texteOption">
          {copieApi[indexRoom].equipements[numeros]}
        </p>
      </div>
    );
  }
};

export default IconOption;
