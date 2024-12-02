import { UseCopieApiContext } from "../../../../hooks/UseCopieApi";
import { UseIndexRoomContext } from "../../../../hooks/UseIndexRoom";
import Switch from "./Switch/Switch";
import "./PictureRoom.css";

const PictureRoom = () => {
  //récupé le contexte index
  const { indexRoom } = UseIndexRoomContext();
  //récupé le contexte api
  const { copieApi } = UseCopieApiContext();

  return (
    <div className="contenerPicture">
      <Switch direction="gauche" />
      <img id="imageChanbre" src={copieApi[indexRoom].image_url} alt="" />
      <Switch direction="droite" />
    </div>
  );
};

export default PictureRoom;
