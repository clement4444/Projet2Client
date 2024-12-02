import "./NbBedRoomCard.css";
import { UseApiContext } from "../../../../hooks/UseApi";

const NbBedRoomCard = ({ index }: { index: number }) => {
  const { api } = UseApiContext();
  return (
    <>
      <p className="BedRoom-Name-Card">
        <strong>1 chambre • {api[index].capacite} personnes</strong>
      </p>
    </>
  );
};

export default NbBedRoomCard;
