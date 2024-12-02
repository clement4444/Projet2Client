import { UseApiContext } from "../../../../hooks/UseApi";
import "./NameRoomCard.css";

const NameRoomCard = ({ index }: { index: number }) => {
  const { api } = UseApiContext();

  return (
    <>
      <p className="room-name-Card">{api[index].nom}</p>
    </>
  );
};

export default NameRoomCard;
