import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";
import "./BedNb.css";

const BedNb = () => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

  return (
    <div className="roomNb">
      <p>1 chambre • {copieApi[indexRoom].capacite} personnes</p>
    </div>
  );
};

export default BedNb;
