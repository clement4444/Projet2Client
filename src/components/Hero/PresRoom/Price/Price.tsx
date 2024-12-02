import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";
import "./Price.css";

const Price = () => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

  return (
    <div>
      <p className="prix">{copieApi[indexRoom].prix_par_nuit}€</p>
      <p className="nbNuit">par nuit</p>
    </div>
  );
};

export default Price;
