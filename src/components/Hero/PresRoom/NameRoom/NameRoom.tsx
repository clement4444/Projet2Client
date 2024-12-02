import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";
import "./NameRoom.css";

const NameRoom = () => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

  return (
    <div className="roomName">
      <p>{copieApi[indexRoom].nom} </p>
    </div>
  );
};

export default NameRoom;
