import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";
import "./Descri.css";

const Descri = () => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();
  return (
    <div className="roomDescri">
      <p>{`"${copieApi[indexRoom].description}"`}</p>
    </div>
  );
};

export default Descri;
